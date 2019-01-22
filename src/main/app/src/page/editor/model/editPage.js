import { observable } from 'mobx';

class EditPage {

  @observable pageModel;

  constructor(option) {
    this.pageModel = option.pageModel;
  }

  get id() {
    return this.pageModel.id;
  }

  get pageId() {
    return this.pageModel.id;
  }

  get title() {
    return this.pageModel.title;
  }

  get components() {
    return this.pageModel.components;
  }

  addComponent(compModel) {
    this.pageModel.addComponent(compModel);
  }

  getClass() {
    return this.pageModel.getClass();
  }
  
  serialize = () => ({
    id: this.id,
    pageId: this.pageId,
    title: this.title,
    components: this.components.map(qmodel => qmodel.serialize()),
  })
}

export default EditPage;