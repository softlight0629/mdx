import { observable } from 'mobx';

class Inspector {

  @observable inspectedCompModel;

  inspect(compModel) {
    this.inspectedCompModel = compModel;
  }
}

export default Inspector;