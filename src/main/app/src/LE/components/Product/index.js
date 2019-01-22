import Product from './Product';
import model from './model';

Product.createModel = option => new model(option);

export default Product;