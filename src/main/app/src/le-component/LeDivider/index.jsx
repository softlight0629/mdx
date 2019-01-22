import React from 'react';
import classNames from 'classnames';

import './index.less';
const LeDivider = (props) => {
  const { mode } = props;
  const dividerCls = classNames('le-divider', {
    'le-divider-short': mode === 'short',
  });

  return (<hr className={dividerCls} />)
}

export default LeDivider;