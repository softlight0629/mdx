import Account from './account';
import Inspector from './inspector';
import Site from './site';

class Root {

  constructor() {
    this.accountStore = new Account();
    this.inspectorStore = new Inspector();
    this.siteStore = new Site();
  }
}

export default Root;

