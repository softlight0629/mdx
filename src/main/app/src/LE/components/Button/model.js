import { observable } from 'mobx';
import StModel from '@/LE/common/StModel';
import properties from './properties';

class Button extends StModel {

  @observable text;

  @observable linkAddr;

  @observable bgColor;

  constructor(option) {
    super(option);

    this.text = option.text;
    this.linkAddr = option.linkAddr;
    this.bgColor = option.bgColor;

    this._properties = properties(this);
  }
}

export default Button;