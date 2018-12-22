import React, { Component } from 'react';
import QrLabel from '../QrLabel';
import QrDivider from '../QrDivider';

import './index.less';

class QrRow extends Component {

  render() {
    const { label, children } = this.props;

    return (
      <div className="qr-row">
        <div className="qr-row-inner">
          <QrLabel text={label} />
          { children }
        </div>
        <QrDivider />
      </div>
    )
  }
}

export default QrRow;