import Page from './Page';
import model from './model';

Page.createModel = option => new model(option);

export default Page;