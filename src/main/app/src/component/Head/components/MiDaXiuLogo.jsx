import React, { Component } from 'react';
import classNames from 'classnames';
import './logo.less';

class MiDaXiuLogo extends Component {

  render() {
    const logoCls = classNames({
      logo: true,
    });

    return (
      <div className={logoCls}>
        <a href="/" className="logo-link">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/cptBhNjKeyaBDrfnMKwC.svg" className="image image-default"/>
        </a>
      </div>
    )
  }
}

export default MiDaXiuLogo;