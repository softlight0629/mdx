import { observable } from 'mobx';
import StModel from '@/LE/common/StModel';
import properties from './properties';

class Banner extends StModel {

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