import React, { PureComponent } from 'react';
import { Button } from 'antd';
import LeInput from '@/le-component/LeInput';
import { observer } from 'mobx-react';
import LeRow from '@/le-component/LeRow';
import LeColor from '@/le-component/LeColor';
import './propRender.less';
const PropRender = {};

@observer
class StringProp extends PureComponent {

  render() {
    const { propModel, property } = this.props;

    return (
      <LeRow label={property.label}>
        <LeInput value={property.value(propModel)} onChange={e => property.onChange(e, propModel)}/>
      </LeRow>
    )
  }
}

@observer
class ArrayItemProp extends PureComponent {

  constructor(option) {
    super(option);

    this.state = {
      expand: false,
    }
  }

  toggle(e) {
    this.setState({
      expand: !this.state.expand,
    });
  }

  render() {
    const { itemPropModel, titleKey, itemKeys, itemsProperties } = this.props;

    return (
      <div className={`prop-array-item ${this.state.expand?'prop-array-item-expand':''}`} >
        <div className="title" onClick={(e) => this.toggle()}>
          <a className="drag">

          </a>
          <span>
            {itemPropModel[titleKey]}
          </span>
        </div>
        <div className="prop-array-item-inner">
          {
            itemKeys.map(itemKey => {
              const itemProperty = itemsProperties[itemKey];
              const type = itemProperty.type;
          
              return <StringProp propModel={itemPropModel} property={itemProperty} />;
            })
          }
        </div>
      </div>
    )
  }
}

@observer
class ArrayProp extends PureComponent {

  render() {
    const { propModel, property } = this.props;
    const items = property.items;
    const titleKey = items.titleKey;
    const itemsProperties= items.properties;
    const itemKeys = Object.keys(itemsProperties);

    return (
    <div className="prop-array">
      <h3>{property.label}</h3>
      { propModel.map(itemPropModel => {
        return (
          <ArrayItemProp itemPropModel={itemPropModel} titleKey={titleKey} itemKeys={itemKeys} itemsProperties={itemsProperties} />
        )
      })}
      <div className="prop-array-action">
        <Button onClick={() => property.onNewItem()}>新增列表</Button>
      </div>
    </div>)
  }
}

@observer
class ColorProp extends PureComponent {

  render() {
    const { propModel, property } = this.props;

    return (
      <LeRow label={property.label}>
        <LeColor value={property.value(propModel)} onChange={e => property.onChange(e, propModel)}/>
      </LeRow>
    )
  }
}

PropRender.color = ColorProp;

PropRender.string = StringProp;

PropRender.array = ArrayProp;

export default PropRender;