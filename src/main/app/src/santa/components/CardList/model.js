import { observable } from 'mobx';
import Card from '../Card';
import QModel from '@/santa/common/QModel';
import properties from './properties';

class CardList extends QModel {

  @observable cards = []

  constructor(option) {
    super(option);
    
    this.cards = option.dataSource;
    this._properties = properties(this);
  }

  newCard() {
    this.cards.push(Card.createModel({
      title: '测试',
      img: '',
      description: 'xxxx',
    }));
  }

  removeCard(id) {
  }

  serialize = () => ([ 'dataSource' ].reduce((obj, key) => {
    obj[key] = this[key];
    return obj;
  }, {type: 'component', component: 'QsCardList' }))
}

export default CardList;