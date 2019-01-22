import React, { Component } from 'react';
import { withEditableBundary } from '@/component/EditableBundary';

import './Banner.less';

class Banner extends Component {

  render() {

    return (
      <div className="s-banner">
        <a className="s-banner-inner" href="">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png"></img>
        </a>
      </div>
    )
  }
}

export default withEditableBundary(Banner);