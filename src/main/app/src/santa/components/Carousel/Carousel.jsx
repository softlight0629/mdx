import React, { Component } from 'react';

import './Carousel.less';

class Carousel extends Component {

  render() {
    return (
      <div className="s-carousel">
        <div className="s-carousel-frame">
          <div className="s-carousel-frame-inner">
            <img src="https://img.alicdn.com/tps/i4/TB1ON.Rw9zqK1RjSZPxSuw4tVXa.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel;