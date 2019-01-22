import { observable } from 'mobx';
import Cache from './cache';

import { convertToEditPage } from '../util'; 
import compRegistar from '@/santa/common/compRegistar';

// 传入 santa 之前，应该就要实例化好所有的 pagemodel.
class EditorStore {

  @observable editPageId = 'ykmlopm';

  constructor(root) {
    this.siteStore = root.siteStore;
    this.cache = new Cache();
  }

  edit(pageId) {
    this.editPageId = pageId;
  }

  getEditPage(pageId) {
    let editPage = this.cache.getEditPage(pageId);

    if (!editPage) {
      const pageData = this.siteStore.getPageData(pageId);
      editPage = convertToEditPage(pageData);
      this.cache.putEditPage(pageId, editPage);
    }

    return editPage;
  }

  addComponent(comp, modelData) {
    const Comp = compRegistar.get('component', comp);
    const model = {
      ...modelData,
    }
    const qmodel = Comp.createModel(model);
  
    qmodel._qclass = Comp;

    const editPage = this.getEditPage(this.editPageId);
    editPage.addComponent(qmodel);
  }

  save() {
    const allPages = this.cache.getAllPages();
    const json = {};
    
    for (const pageId of Object.keys(allPages)) {
      json[pageId] = allPages[pageId].serialize();
    }

    console.log(json);
  }

  saveEditPage(pageId) {
  }
}

export default EditorStore;