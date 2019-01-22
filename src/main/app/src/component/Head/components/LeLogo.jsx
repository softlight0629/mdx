import React, { Component } from 'react';
import classNames from 'classnames';
import './logo.less';

class LeLogo extends Component {

  render() {
    const logoCls = classNames({
      logo: true,
    });

    return (
      <div className={logoCls}>
        <a href="/" className="logo-link">
          <img src="" className="image image-default"/>
        </a>
      </div>
    )
  }
}

export default LeLogo;