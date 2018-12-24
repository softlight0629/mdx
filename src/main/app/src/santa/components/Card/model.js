import { observable } from 'mobx';

class Card {

  @observable title;

  @observable img;

  @observable description;

  constructor(option) {
    this.title = option.title;
    this.img = option.img;
    this.description = option.description;
  }
}

export default Card;