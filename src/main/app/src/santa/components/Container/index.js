import Container from './Container';
import model from './model';

Container.createModel = option => new model(option);

export default Container;