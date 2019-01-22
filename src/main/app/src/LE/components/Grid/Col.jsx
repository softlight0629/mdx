import React from 'react';
import classNames from 'classnames';
import RowContext from './RowContext';

class Col extends React.Component {

  render() {
    const props = this.props;
    const {
      span,
      order,
      offset,
      push,
      pull,
      className,
      children,
      prefixCls = 's-col',
      ...others
    } = props;
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
      let sizeProps = {};
      if (typeof props[size] === 'number') {
        sizeProps.span = props[size];
      } else if (typeof props[size] === 'object') {
        sizeProps = props[size] || {};
      }

      delete others[size];

      sizeClassObj = {
        ...sizeClassObj,
        [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
        [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
        [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
          sizeProps.offset || sizeProps.offset === 0,
        [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
        [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      };
    });
    const classes = classNames(
      {
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull,
      },
      className,
      sizeClassObj,
    );

    return (
      <RowContext.Consumer>
        {
          ({ gutter }) => {
            let style = others.style;
            if (gutter > 0) {
              style = {
                paddingLeft: gutter / 2,
                paddingRight: gutter / 2,
                ...style,
              };
            }

            return (
              <div { ...others } style={style} className={classes}>
                {children}
              </div>
            )
          }
        }
      </RowContext.Consumer>
    )
  }

}

export default Col;