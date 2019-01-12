import { observable } from 'mobx';
import QModel from '@/santa/common/QModel';

class Card extends QModel{

  @observable title;

  @observable img;

  @observable description;

  constructor(option) {
    super(option);
    
    this.title = option.title;
    this.img = option.img;
    this.description = option.description;
  }

  serialize = () => (['title', 'img', 'description'].reduce((obj, key) => {
    obj[key] = this[key];
    return obj;
  }, { type: 'component', component: 'QsCard' }))
}

export default Card;