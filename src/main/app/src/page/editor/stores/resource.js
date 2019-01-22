import { observable } from 'mobx';

class Resource {

  @observable panelVisible = false;


  showPanel() {
    this.panelVisible = true;
  }

  closePanel() {
    this.panelVisible = false;
  }

}

export default Resource;