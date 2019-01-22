import React from 'react';

import './index.less';

const LeLabel = (props) => {
  const { className = '', text } = props;
  return (
    <label className={`le-label ${className}`}>
      <span className="le-label-text">{ text }</span>
    </label>
  )
}

export default LeLabel;