import { observable } from 'mobx';

class Carousel {
  @observable dataSource = [];
  constructor(option) {
    this.dataSource = option.dataSource;
  }
}

export default Carousel;