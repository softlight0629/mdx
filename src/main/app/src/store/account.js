import { observable } from 'mobx';
import Account from '../model/account';
import appData from '@/appData';
 
class AccountStore {

  @observable me;

  doLogin() {
    console.log('doLogin...')
    this.me = new Account(appData.me);
  }

  getUserAccount() {

    // get('http://localhost:8080/api/v1/accounts/1')
    //   .then(account => {
    //     this.account = new Account(account);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }
}

export default AccountStore;