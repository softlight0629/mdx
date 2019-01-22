import createComp from '../core/createComp';
import { Row as StRow, Col as StCol } from './Grid';

import { default as StCarousel } from './Carousel';

import { default as StCard } from './Card';

import { default as StNav } from './Nav';

import { default as StCardList } from './CardList';

import { default as StContainer } from './Container';

import { default as StProduct } from './Product';

import { default as StButton } from './Button';

import { default as StList } from './List';

import { default as StBanner } from './Banner';

function register(name, clazz) {
  createComp('component', name, clazz);
}

register('StRow', StRow);
register('StCol', StCol);
register('StCarousel', StCarousel);
register('StCard', StCard);
register('StNav', StNav);
register('StCardList', StCardList);
register('StContainer', StContainer);
register('StProduct', StProduct);

register('santa.viewer.components.StCarousel', StCarousel);
register('santa.viewer.components.StCard', StCard);
register('santa.viewer.components.StNav', StNav);
register('santa.viewer.components.StCardList', StCardList);
register('santa.viewer.components.StContainer', StContainer);
register('santa.viewer.components.StProduct', StProduct);
register('santa.viewer.components.StButton', StButton);
register('santa.viewer.components.StList', StList);
register('santa.viewer.components.StBanner', StBanner);

export {
  StRow,
  StCol,
  StCarousel,
  StCard,
  StNav,
  StCardList,
  StContainer,
  StProduct,
  StButton,
  StList,
  StBanner,
}





