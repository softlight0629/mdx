import React from 'react';

import './index.less';

const QrLabel = (props) => {
  const { className = '', text } = props;
  return (
    <label className={`qr-label ${className}`}>
      <span className="qr-label-text">{ text }</span>
    </label>
  )
}

export default QrLabel;