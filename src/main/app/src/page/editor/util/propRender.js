import React, { PureComponent } from 'react';
import { Button } from 'antd';
import QrInput from '@/qr-component/QrInput';
import { observer } from 'mobx-react';
import QrRow from '@/qr-component/QrRow';
import './propRender.less';
const PropRender = {};

// PropRender.array = (propModel, property) => {
//   const items = property.items;

//   const itemsProperties= items.properties;
//   const itemKeys = Object.keys(itemsProperties);

//   const renderItemProp = (itemPropModel) => {
//     return itemKeys.map(itemKey => {
//       const itemProperty = itemsProperties[itemKey];
//       const type = itemProperty.type;
  
//       return observer(PropRender[type](itemPropModel, itemProperty)());
//     });
//   }

//   return propModel.map(itemPropModel => {
//     return renderItemProp(itemPropModel)
//   });
// }


@observer
class StringProp extends PureComponent {

  render() {
    const { propModel, property } = this.props;

    return (
      <QrRow label={property.label}>
        <QrInput value={property.value(propModel)} onChange={e => property.onChange(e, propModel)}/>
      </QrRow>
    )
  }
}

@observer
class ArrayProp extends PureComponent {

  render() {
    const { propModel, property } = this.props;
    const items = property.items;
    const itemsProperties= items.properties;
    const itemKeys = Object.keys(itemsProperties);

    const renderItemProp = (itemPropModel) => {
      return itemKeys.map(itemKey => {
        const itemProperty = itemsProperties[itemKey];
        const type = itemProperty.type;
    
        return <StringProp propModel={itemPropModel} property={itemProperty} />;
      });
    }

    return (<React.Fragment>
      { propModel.map(itemPropModel => {
        return (
          <div className="prop-array">
            <div>itemPropModel</div>
            <div className="prop-array-inner">
              {renderItemProp(itemPropModel)}
            </div>
          </div>
        )
      })}
      <Button onClick={() => property.onAdd()}>新增</Button>
    </React.Fragment>)
  }
}

PropRender.string = StringProp;

PropRender.array = ArrayProp;

export default PropRender;