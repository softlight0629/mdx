import { observable } from 'mobx';
import StModel from '@/LE/common/StModel';

class Card extends StModel{

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
  }, { type: 'component', component: 'StCard' }))
}

export default Card;