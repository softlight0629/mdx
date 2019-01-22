import React, { Component } from 'react';

class Feature extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="m-features">
        { children }
      </div>
    )
  }
}

export default Feature;