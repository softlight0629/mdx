import { observable } from 'mobx';

export default class Account {

  @observable avatar;

  @observable avatar_url;

  constructor(opt) {
    this.account_id = opt.account_id;
    this.username = opt.username;
    this.mobile = opt.mobile;
    this.name = opt.name;
    this.avatar = opt.avatar;
    this.avatar_url = opt.avatar_url;
  }
}
