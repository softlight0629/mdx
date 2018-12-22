import React, { Fragment } from 'react';

const INTERPOLATE_REG = /\{(\w*)\}/g;
const PLURAL_REG = /\[(\w*):(\w*)\|(\w*)\]/g;
const CONTEXT_REG = /#\w*$/;

const translate = (text, value = {}, en, useEn) => {
  if (useEn) {
    text = en[text] || text;
  }
  let output = text;

  // 先处理单复数
  output = output.replace(PLURAL_REG, (...matches) => {
    const count = value[matches[1]];
    const singular = matches[2];
    const plural = matches[3];
    if (count && count > 1) {
      return plural;
    }
    return singular;
  });

  // 处理掉多场景结尾 #envA
  output = output.replace(CONTEXT_REG, '');

  // 替换变量
  // frags 存储字符串每个片段, 如果变量传入的是 ReactNode, 返回的是 ReactNodes
  const frags = [];
  let hasReactNode = false;
  let index = 0;
  const len = output.length;
  const outputBake = output;
  output = output.replace(INTERPOLATE_REG, (...matches) => {
    frags.push(outputBake.substring(index, matches[2]));
    index = matches[2] + matches[0].length;
    let key = matches[1].trim();
    if (!key) {
      return '';
    }
    if (key.match(/^\d+$/)) {
      key = parseInt(key, 10);
    }
    const _v = value[key];
    if (_v === undefined) {
      frags.push(matches[0]);
      return matches[0];
    }

    frags.push(_v);
    if (React.isValidElement(_v)) {
      hasReactNode = true;
      return '';
    }
    return _v;
  });

  if (index < len) {
    frags.push(outputBake.substring(index));
  }
  if (hasReactNode) {
    return frags.map((fragment, i) => <Fragment key={Math.random()}>{fragment}</Fragment>);
  }
  return output;
};

export { translate };

export default { translate };