import React, { Component } from 'react';
import QrInput from '@/qr-component/QrInput';
import QrRow from '@/qr-component/QrRow';
import { observer, inject } from 'mobx-react';

@inject('inspectorStore')
@observer
class PropInspector extends Component {

  render() {
    const { inspectObj } = this.props.inspectorStore;
    console.log(inspectObj && inspectObj.qclazz, 'inspectObj....');
    const inspector = inspectObj && inspectObj.qclazz.createInspector(inspectObj);

    return (
      <div className="qr-editor-prop-inspector">
        <div className="qr-editor-prop-inspector-inner">
          <div className="inspector">
            {
              inspector && Object.keys(inspector).map(k => {
                const def = inspector[k];

                return (
                  <QrRow label={def.label}>
                    <QrInput value={def.value} onChange={e => def.onChange(e) }/>
                  </QrRow>)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PropInspector;