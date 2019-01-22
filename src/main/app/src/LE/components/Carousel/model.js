import { observable } from 'mobx';
import StModel from '@/LE/common/StModel';

class Carousel extends StModel {

  @observable dataSource = [];

  constructor(option) {
    super(option);
    this.dataSource = option.dataSource;
  }

  serialize = () => ([ 'dataSource' ].reduce((obj, key) => {
    obj[key] = this[key];
    return obj;
  }, {type: 'component', component: 'StCarousel' }))
}

export default Carousel;