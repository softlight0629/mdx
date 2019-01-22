/*
* 全站头像组件
*/
import React from 'react';
import imgResize from '@/util/imgResize';
import LetterAvatar from './LetterAvatar';

const Avatar = (props) => {
  const {
    src, size, className, name, useLetterAvatar,
  } = props;

  const sizeMap = {
    lg: 128,
    md: 64,
    sm: 32,
    xs: 16,
  };
  const img_size = sizeMap[size] || size;
  // 利用 style 减少父元素去定义 size 样式
  const style = {
    width: img_size,
    height: img_size,
    borderRadius: img_size / 2,
  };

  // SZXCSCJTuhRSmAggBlVp 默认 team 头像
  const isDefaultGroup = src && src.indexOf('rmsportal/SZXCSCJTuhRSmAggBlVp') > -1;
  if (isDefaultGroup || (useLetterAvatar && !src)) {
    return (
      <LetterAvatar
        size={img_size}
        text={name}
        style={style}
        className={className}
        isGroup={isDefaultGroup}
      />
    );
  }

  if (!src) return null;

  let imgSrc = imgResize(src, img_size);

  return (
    <img src={imgSrc} className={className} style={style} alt={name || ''} />
  );
};

Avatar.defaultProps = {
  size: 'sm',
};

export default Avatar;