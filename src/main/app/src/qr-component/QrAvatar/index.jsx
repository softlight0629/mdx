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
  if (src.indexOf('work.alibaba-inc.com') > -1) {
    if (img_size && img_size <= 32) {
      // 内网头像，默认是 200x200 的，转换成 64x64.xz 高清小图
      // 阿里内网特殊参数 http://gitlab.alibaba-inc.com/node/ali-contributors/merge_requests/101977/diffs#addb28494dbd79d967de95d6895fc2db72056555_136_135
      //  https://work.alibaba-inc.com/photo/143969.220x220.jpg
      //   ==>
      //  https://work.alibaba-inc.com/photo/143969.64x64.xz.jpg
      imgSrc = src.replace('.220x220.', '.64x64.xz.');
    } else {
      // 其他 size 默认使用 200x200 的
      imgSrc = src;
    }
  } else if (src.indexOf('.svg') > -1) {
    // svg 不做任何处理
    imgSrc = src;
  }

  return (
    <img src={imgSrc} className={className} style={style} alt={name || ''} />
  );
};

Avatar.defaultProps = {
  size: 'sm',
};

export default Avatar;