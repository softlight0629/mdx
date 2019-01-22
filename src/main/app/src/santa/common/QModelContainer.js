import { observable } from 'mobx';
import QModel from './QModel';

class QModelContainer extends QModel {

  @observable components = [];

  constructor(option) {
    super(option);
    this.components = option.components;
  }

  addComponent(compModel) {
    this.components.push(compModel);
  }
}

export default QModelContainer;