import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import SlickCarousel from 'react-slick';
import { withEditableBundary } from '@/component/EditableBundary';

import './Carousel.less';

class CarouselFrame extends Component {

  static defaultProps = {
    prefixCls: 's-carousel-frame',
  }

  render() {
    const {
      prefixCls,
      children,
    } = this.props;

    return (
      <div className={prefixCls}>
        {children}
      </div>
    )
  }
}

class CarouselSlick extends Component {

    static defaultProps = {
      dots: true,
      arrows: false,
      prefixCls: 's-carousel',
      draggable: false,
    }

    constructor(props) {
      super(props);
      this.onWindowResized = debounce(this.onWindowResized, 500, {
        leading: false,
      });
    }

    componentDidMount() {
      const { autoplay } = this.props;
      if (autoplay) {
        window.addEventListener('resize', this.onWindowResized);
      }
      this.innerSlider = this.slick && this.slick.innerSlider;
    }

    componentWillUnmount() {
      const { autoplay } = this.props;
      if (autoplay) {
        window.removeEventListener('resize', this.onWindowResized);
        this.onWindowResized.cancel();
      }
    }

    onWindowResized = () => {
      const { autoplay } = this.props;
      if (autoplay && this.slick && this.slick.innerSlider && this.slick.innerSlider.autoPlay) {
        this.slick.innerSlider.autoPlay();
      }
    }

    saveClick = (node) => {
      this.slick = node;
    }

    next() {
      this.slick.slickNext();
    }

    prev() {
      this.slick.slickPrev();
    }

    goto(slide, dontAnimate = false) {
      this.slick.slickGoTo(slide, dontAnimate);
    }

    render() {
      const props = {
        ...this.props,
      };

      if (props.effect === 'fade') {
        props.fade = true;
      }

      let className = props.prefixCls;
      if (props.vertical) {
        className = `${className} ${className}-vertical`;
      }

      return (
        <div className={className}>
          <SlickCarousel ref={this.saveClick} {...props} />
        </div>
      )
    }
}

class Carousel extends React.Component {

  render() {
    const { dataSource = [] } = this.props.qmodel;

    return (
      <CarouselSlick>
        {
          dataSource && dataSource.map(f => {
            return (
              <CarouselFrame>
                <img src={f.src} />
              </CarouselFrame>
            )
          })
        }
      </CarouselSlick>
    )
  }
}

Carousel.Frame = CarouselFrame;
Carousel.Slick = CarouselSlick;

export default withEditableBundary(Carousel);