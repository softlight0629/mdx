import { observable } from 'mobx';
import QModel from '@/santa/common/QModel';
import properties from './properties';

class List extends QModel {

  @observable listItems = [];

  constructor(option) {
    super(option);

    this.listItems = option.listItems;
    this._properties = properties(this);
  }

  newItem() {
    this.listItems.push({
      title: '信息产业潜力爆发',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png',
      label: '留学',
    });
  }
}

export default List;