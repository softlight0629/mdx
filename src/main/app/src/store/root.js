import Account from './account';
import Site from './site';

class Root {

  constructor() {
    this.accountStore = new Account();
    this.siteStore = new Site();
  }
}

export default Root;

