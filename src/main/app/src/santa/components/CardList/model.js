import { observable } from 'mobx';

class CardList {

  @observable dataSource = []

  constructor(option) {
    this.dataSource = option.dataSource;
  }
}

export default CardList;