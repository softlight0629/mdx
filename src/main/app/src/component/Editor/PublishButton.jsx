import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { __ } from '@/util/common';

class PublishButton extends PureComponent {


  render() {
    return (
      <Button
        type="primary"
      >
        <span className="leicon leicon-launch"></span>
        <span className="text">{__('发布')}</span>
      </Button>
    )
  }
}
export default PublishButton;