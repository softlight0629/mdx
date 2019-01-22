import { observable } from 'mobx';
import QModel from '@/santa/common/QModel';
import properties from './properties';

class Banner extends QModel {

  @observable img;

  @observable linkAddr;

  constructor(option) {
    super(option);

    this.img = option.img;
    this.linkAddr = option.linkAddr;

    this._properties = properties(this);
  }
}

export default Banner;