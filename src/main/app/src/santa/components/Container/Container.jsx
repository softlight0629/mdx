import React from 'react';

import './Container.less';

class Container extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className="s-container">
        { children }
      </div>
    )
  }
}

export default Container;