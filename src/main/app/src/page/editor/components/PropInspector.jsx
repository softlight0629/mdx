import React, { Component } from 'react';
import QrInput from '@/qr-component/QrInput';
import QrRow from '@/qr-component/QrRow';
import { observer, inject } from 'mobx-react';

@inject('inspectorStore')
@observer
class PropInspector extends Component {

  render() {
    const { inspectObj } = this.props.inspectorStore;

    return (
      <div className="qr-editor-prop-inspector">
        <div className="qr-editor-prop-inspector-inner">
          <div className="inspector">
            <QrRow label="卡片标题写什么?">
              <QrInput value={inspectObj && inspectObj.title } onChange={e => inspectObj.title = e.target.value }/>
            </QrRow>
            <QrRow label="卡片描述写什么?" >
              <QrInput value={inspectObj && inspectObj.description } onChange={e => inspectObj.description = e.target.value }/>
            </QrRow>
          </div>
        </div>
      </div>
    )
  }
}

export default PropInspector;