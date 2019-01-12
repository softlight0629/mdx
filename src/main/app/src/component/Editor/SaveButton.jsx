import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { inject } from 'mobx-react';
import { __ } from '@/util/common';

@inject('editorStore')
class SaveButton extends PureComponent {

  save() {
    this.props.editorStore.save();
  }

  render() {

    return (
      <Button onClick={() => { this.save()}}>
        <span className="qricon qricon-launch"></span>
        <span className="text">{__('保存')}</span>
      </Button>
    )
  }
}

export default SaveButton