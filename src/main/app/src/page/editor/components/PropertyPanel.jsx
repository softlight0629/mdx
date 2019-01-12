import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropRender from '../util/propRender';

@inject('inspectorStore')
@observer
class PropertyPanel extends Component {

  renderPropComps(properties, qmodel) {
    const propKeys = Object.keys(properties);

    return propKeys.map(propKey => {
      const property = properties[propKey];
      const propModel = qmodel[propKey];
      const type = property.type;
      const PropComp = PropRender[type];

      return <PropComp propModel={propModel} property={property} />;
    })
  }


  render() {
    const { inspectObj } = this.props.inspectorStore;
    const properties = inspectObj && inspectObj.getProperties();

    return (
      <div className="qr-editor-propery-panel">
        <div className="qr-editor-propery-panel">
          <div className="properties">
            {
              properties && this.renderPropComps(properties, inspectObj)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PropertyPanel;