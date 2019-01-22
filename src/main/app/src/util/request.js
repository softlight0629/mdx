/* eslint import/first:0 */
import fetch from 'isomorphic-fetch';
import { stringify } from 'query-string';

const formatError = (message, options) => {
  let resp;
  try {
    resp = JSON.parse(message);
  } catch (err) {
    resp = { message };
  }
  const err = new Error(resp.message);
  Object.assign(err, resp);
  if (!options || !options.ignoreGlobalMessage) {
    err.globalMessage = resp.message;
  }
  return err;
};

const parse = (res, url, options) => {
  if (res.status >= 200 && res.status < 300) {
    return res.json().catch((e) => {});
  }
  if (res.status === 401) {
    if (window.location.pathname !== '/login') {
      const params = { goto: encodeURIComponent(window.location.href) };
      window.location.href = `/login?${stringify(params)}`;
    } else {
      window.location.href = '/login';
    }
    return {};
  }

  // 返回错误的消息体，有可能不是 JSON
  return res.text().then((message) => {
    throw formatError(message, options);
  });
};

// 将 POST/PUT 的参数转换为 String
// 附带一些公共逻辑（对密码字段进行加密）
const ENCRYPTED_KEYS = ['password', 'old_password', 'confirm_password'];
const JSONStringify = (parameters) => {
  if (!parameters) return parameters;
  Object.keys(parameters).forEach((key) => {
    // if (ENCRYPTED_KEYS.includes(key)) {
    //   parameters = { ...parameters };
    //   parameters[key] = encrypt(parameters[key]);
    // }
  });
  return JSON.stringify(parameters);
};

export default function qrFetch(url, options = {}) {
  const opts = {
    ...options,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      // 'x-csrf-token': getCtoken(window, true),
    },
  };
  // 通过 FormData multipart 上传文件时，不能传递 `Content-Type`
  if (!opts.headers['Content-Type']) delete opts.headers['Content-Type'];
  return fetch(url, opts)
    .then(res => parse(res, url, options), (error) => {
      const globalMessage = '网络异常';
      throw formatError(globalMessage, options);
    });
}

export async function get(url, parameters, options) {
  const realPath = parameters ? `${url}?${stringify(parameters)}` : url;
  return qrFetch(realPath, options);
}

export async function post(url, parameters, options) {
  return qrFetch(url, {
    method: 'POST',
    body: JSONStringify(parameters),
    ...options,
  });
}

export async function put(url, parameters, options) {
  return qrFetch(url, {
    method: 'PUT',
    body: JSONStringify(parameters),
    ...options,
  });
}

export async function namespaceDelete(url, parameters, options) {
  const realPath = (parameters && Object.keys(parameters).length) ? `${url}?${stringify(parameters)}` : url;
  return qrFetch(realPath, {
    method: 'DELETE',
    ...options,
  });
}

export function loadScript(url, callback) {
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
  script.onload = callback;
}

export { namespaceDelete as delete };