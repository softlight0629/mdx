import Card from './Card';
import model from './model';
import inspector from './inspector'

Card.createModel = option => new model(option);
Card.createInspector = qmodel => new inspector(qmodel);

export default Card;