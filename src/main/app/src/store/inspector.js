import { observable } from 'mobx';

class InspectorStore {

  // 解析生成组件属性面板
  @observable inspectObj;
  
  inspect(obj) {
    console.log(obj, 'acsasaxax');
    this.inspectObj = obj;
  }
}

export default InspectorStore;