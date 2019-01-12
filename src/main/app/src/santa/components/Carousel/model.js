import { observable } from 'mobx';
import QModel from '@/santa/common/QModel';

class Carousel extends QModel {

  @observable dataSource = [];

  constructor(option) {
    super(option);
    this.dataSource = option.dataSource;
  }

  serialize = () => ([ 'dataSource' ].reduce((obj, key) => {
    obj[key] = this[key];
    return obj;
  }, {type: 'component', component: 'QsCarousel' }))
}

export default Carousel;