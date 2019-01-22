import Card from './Card';
import model from './model';

Card.createModel = option => new model(option);

export default Card;