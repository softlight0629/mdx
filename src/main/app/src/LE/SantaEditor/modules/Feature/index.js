import Feature from './Feature';
import model from './model';

Feature.createModel = option => new model(option);

export default Feature;