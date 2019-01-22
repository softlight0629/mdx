import { observable } from 'mobx';
import StModel from './StModel';

class StModelContainer extends StModel {

  @observable components = [];

  constructor(option) {
    super(option);
    this.components = option.components;
  }

  addComponent(compModel) {
    this.components.push(compModel);
  }
}

export default StModelContainer;