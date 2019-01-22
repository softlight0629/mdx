import createComp from '../createComp';
import { default as QcPage } from './Page';

function register(name, clazz) {
  createComp('component', name, clazz);
}

register('santa.core.components.QcPage', QcPage);

export {
  QcPage,
}