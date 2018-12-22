import React, { Component } from 'react';

import './Banner.less';

class Banner extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="m-banner">
        { children }
      </div>
    )
  }
}

export default Banner;