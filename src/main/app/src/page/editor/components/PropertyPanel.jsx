import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropRender from '../util/propRender';

@inject('editorStore')
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
    const { inspectedCompModel } = this.props;
    const properties = inspectedCompModel && inspectedCompModel.getProperties();

    return (
      <div className="qr-editor-property-panel">
        <div className="properties">
          {
            properties && this.renderPropComps(properties, inspectedCompModel)
          }
        </div>
      </div>
    )
  }
}

export default PropertyPanel;