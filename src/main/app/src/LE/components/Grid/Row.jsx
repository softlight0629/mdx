import React from 'react';
import classNames from 'classnames';
import RowContext from './RowContext';

const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

class Row extends React.Component {

  static defaultProps = {
    gutter: 0,
  };

  state = {
    screens: {},
  };

  getGutter() {
    const { gutter } = this.props;
    if (typeof gutter === 'object') {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
          return gutter[breakpoint];
        }
      }
    }

    return gutter;
  }

  render() {
    const {
      type,
      justify,
      align,
      className,
      style,
      children,
      prefixCls = 's-row',
      ...others
    } = this.props;

    const gutter = this.getGutter();
    const classes = classNames(
      {
        [prefixCls]: !type,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${type}-${justify}`]: type && justify,
        [`${prefixCls}-${type}-${align}`]: type && align,
      },
      className,
    ); 
    const rowStyle =
      gutter > 0
        ? {
            marginLeft: gutter / -2,
            marginRight: gutter / -2,
            ...style,
          }
        : style;
    const otherProps = { ...others };
    delete otherProps.gutter;

    return (
      <RowContext.Provider value={{ gutter }}>
        <div {...otherProps} className={classes}>
          {children}
        </div>
      </RowContext.Provider>
    )
  }
}

export default Row;