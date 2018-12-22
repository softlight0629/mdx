import fetch from 'isomorphic-fetch';

/**
 * 基于 tracker 封装的打点函数
 * tracker 文档： https://yuque.antfin-inc.com/clue/help/wdylmk
 *
 * @param {Error Object} error
 * @param {Object} info
 * clue 上报字段 https://clue.alibaba-inc.com/project?pid=skylark&tab=custom
 *  - code: required 监控代码 1, 2, 11...
 *  - msg: required 报错信息
 *  - c1: 自定义字段1
 *  - c2: 自定义字段2
 *  - ....
 */

function _getTracker() {
  if (!window.tracker) {
    window.tracker = new window.Tracker({
      pid: window.appData.isYuque ? 'yuque' : 'skylark',
      uidResolver() {
        return window.appData.me.login;
      },
    });
  }
  return window.tracker;
}

// 前端错误也上报到语雀的日志服务，方便追踪 traceId 对应的服务端错误
function _logToYuque(error, info) {
  return fetch('/api/logs/error', {
    method: 'POST',
    body: JSON.stringify({
      stack: error.stack,
      message: info.msg,
      href: window.location.href,
      traceId: window.appData.traceId,
    }),
  });
}

function _log(info, error) {
  const { env } = window.appData;
  if (env !== 'prod' || !info) return;

  try {
    const tracker = _getTracker();
    if (error) {
      tracker.logError(error, info);
      _logToYuque(error, info).catch((e) => {
        tracker.logError(e, {
          code: 1,
          msg: `上报 Yuque 异常：${e.message}`,
        });
      });
    } else {
      tracker.log(info);
    }
  } catch (e) {
    console.log(`上报 Clue 异常：${e.message}`);
  }
}

/**
 * 普通异常
 * error: [Object] 错误对象，
 * msg: 用于错误的归类分析信息，
 * 数据查看： https://clue.alibaba-inc.com/monitor/live?code=1&pid=skylark
 */
function logError(error, msg) {
  const clueInfo = {
    code: 1,
    msg: msg || error.message || '未知错误',
  };
  _log(clueInfo, error);
}

/**
 * 专门用于统计富文本编辑器奔溃错误
 * error: [Object] 错误对象，
 * msg: 用于错误的归类分析信息，
 * 数据查看： https://clue.alibaba-inc.com/monitor/live?code=13&pid=skylark
 * c4: traceId,
 * c5: componentStack，记录错误组件的堆栈
 */
function editorError(error, msg) {
  const clueInfo = {
    code: 13,
    msg: error.message || '富文本编辑器崩溃',
    c4: window.appData.traceId,
    c5: msg || '',
  };
  _log(clueInfo, error);
}

/**
 * 用于统计普通事件情况
 * msg: [string] 事件名称，
 * targetId: 用于更细的对象分析，
 * 数据查看： https://clue.alibaba-inc.com/monitor/live?code=14&pid=skylark
 * c4: traceId,
 * c5: targetId
 */
function logEvent(msg, targetId) {
  const clueInfo = {
    code: 14,
    msg,
    c4: window.appData.traceId,
    c5: targetId || '',
  };
  _log(clueInfo);
}


export default {
  logError,
  logEvent,
  editorError,
};