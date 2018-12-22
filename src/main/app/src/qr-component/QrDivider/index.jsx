import React from 'react';
import classNames from 'classnames';

import './index.less';
const QrDivider = (props) => {
  const { mode } = props;
  const dividerCls = classNames('qr-divider', {
    'qr-divider-short': mode === 'short',
  });

  return (<hr className={dividerCls} />)
}

export default QrDivider;