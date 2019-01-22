import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import classNames from 'classnames';

import './index.less';

const LePopover = (props) => {
  const {
    className = '',
    type,
    content,
    children,
    noArrow,
    ...otherProps
  } = props;

  const cls = classNames({
    'le-popover': true,
    'le-popover-menu': type === 'menu',
    'le-popover-noarrow': noArrow,
  });

  return (
    <div className={`${cls} ${className}`}>
      <Popover
        getPopupContainer={node => {
          return node.parentNode;
        }}
        {...otherProps}
        content={content}
      >
        {children}
      </Popover>
    </div>
  );
};

LePopover.propTypes = {
  // 类别，Antd Menu 时需传 menu
  type: PropTypes.string,
  // Popover 内容
  content: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  noArrow: PropTypes.bool,
};

export default LePopover;