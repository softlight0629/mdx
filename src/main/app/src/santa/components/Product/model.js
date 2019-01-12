import { observable } from 'mobx';

class Product {

  @observable img;

  @observable title;

  constructor(option) {
    this.img = option.img;
    this.title = option.title;
  }
}

export default Product;