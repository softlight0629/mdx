import React from 'react';
import { Card } from 'antd';
import './index.less';

export default (props) => {
  const { children, ...otherProps } = props;

  return (
    <div className="le-card">
      <Card {...otherProps }>
        {children}
      </Card>
    </div>
  )
}