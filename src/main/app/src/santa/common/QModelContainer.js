import QModel from './QModel';

class QModelContainer extends QModel {

  constructor(option) {
    super(option);
    this.components = option.components;
  }
}

export default QModelContainer;