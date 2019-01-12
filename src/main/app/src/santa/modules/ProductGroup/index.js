import ProductGroup from './ProductGroup';
import model  from './model';

ProductGroup.createModel = option => new model(option);

export default ProductGroup;