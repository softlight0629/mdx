import React from 'react';
import classname from 'classnames';
import randomColor from '@/util/randomColor';
import './LetterAvatar.less';

export default function LetterAvatar(props) {
  const {
    text = 'U', size = 32, style, className,
  } = props;

  const cls = classname('placeholder-avatar', className);
  if (!text) return null;

  // 处理 emoji 字符 https://thekevinscott.com/emojis-in-javascript/
  let showName = text.codePointAt(0);
  showName = String.fromCodePoint(showName);

  if (!/[0-9a-zA-Z\u4e00-\u9fa5]/.test(showName)) {
    // 默认团队名优先取第一个中文
    let match = text.match(/[\u4e00-\u9fa5]/);
    if (!match) {
      match = text.match(/[0-9a-zA-Z]/);
    }
    if (match) {
      showName = match[0];
    }
  }

  return (
    <span
      className={cls}
      style={{
        ...style,
        width: `${size}px`,
        heigth: `${size}px`,
        lineHeight: `${size}px`,
        fontSize: `${(1 * size) / 2}px`,
        backgroundColor: `${randomColor(text)}`,
      }}
    >
      {showName.toUpperCase()}
    </span>
  );
}