import createComp from '../core/createComp';
import QmFeature from './Feature';
import QmHeader from './Header';
import QmFooter from './Footer';
import QmBanner from './Banner';
import QmProductGroup from './ProductGroup';

function register(name, clazz) {
  createComp('module', name, clazz);
}

register('QmFeature', QmFeature);
register('QmHeader', QmHeader);
register('QmFooter', QmFooter);
register('QmBanner', QmBanner);
register('QmProductGroup', QmProductGroup);

export {
  QmFeature,
  QmHeader,
  QmFooter,
  QmBanner,
  QmProductGroup,
}

