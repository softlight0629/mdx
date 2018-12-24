import createComp from '../core/createComp';
import QmFeature from './Feature';
import QmHeader from './Header';
import QmFooter from './Footer';
import QmBanner from './Banner';

function register(name, clazz) {
  createComp('module', name, clazz);
}

register('QmFeature', QmFeature);
register('QmHeader', QmHeader);
register('QmFooter', QmFooter);
register('QmBanner', QmBanner);

export {
  QmFeature,
  QmHeader,
  QmFooter,
  QmBanner,
}

