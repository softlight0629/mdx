import Account from './account';
import Inspector from './inspector';

class Root {

  constructor() {
    this.accountStore = new Account();
    this.inspectorStore = new Inspector();
  }
}

export default Root;

