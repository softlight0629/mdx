import { observable } from 'mobx';

class ProductGroup {

  @observable dataSource = [];

  constructor(option) {
    this.dataSource = option.dataSource;
  }
}

export default ProductGroup;