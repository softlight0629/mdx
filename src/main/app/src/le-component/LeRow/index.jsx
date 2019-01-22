import React, { Component } from 'react';
import LeLabel from '../LeLabel';
import LeDivider from '../LeDivider';

import './index.less';

class LeRow extends Component {

  render() {
    const { label, children } = this.props;

    return (
      <div className="le-row">
        <div className="le-row-inner">
          <LeLabel text={label} />
          { children }
        </div>
        <LeDivider />
      </div>
    )
  }
}

export default LeRow;