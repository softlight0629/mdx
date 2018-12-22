import React from 'react';
import classNames from 'classnames';

export default (props) => {
  const { children, mode } = props;
  const containerCls = classNames({
    'layout-container': true,
    'layout-container-wider': mode === 'wider',
    'layout-container-middle': mode === 'middle',
    'layout-container-full': mode === 'full',
    clearfix: true,
  });
  return (
    <div className={containerCls}>
      {children}
    </div>
  );
}; 