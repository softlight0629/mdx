import createComp from '../core/createComp';
import { Row as QsRow, Col as QsCol } from './Grid';

import { default as QsCarousel } from './Carousel';

import { default as QsCard } from './Card';

import { default as QsNav } from './Nav';

import { default as QsCardList } from './CardList';

import { default as QsContainer } from './Container';

import { default as QsProduct } from './Product';

function register(name, clazz) {
  createComp('component', name, clazz);
}

register('QsRow', QsRow);
register('QsCol', QsCol);
register('QsCarousel', QsCarousel);
register('QsCard', QsCard);
register('QsNav', QsNav);
register('QsCardList', QsCardList);
register('QsContainer', QsContainer);
register('QsProduct', QsProduct);

register('santa.viewer.components.QsCarousel', QsCarousel);
register('santa.viewer.components.QsCard', QsCard);
register('santa.viewer.components.QsNav', QsNav);
register('santa.viewer.components.QsCardList', QsCardList);
register('santa.viewer.components.QsContainer', QsContainer);
register('santa.viewer.components.QsProduct', QsProduct);

export {
  QsRow,
  QsCol,
  QsCarousel,
  QsCard,
  QsNav,
  QsCardList,
  QsContainer,
  QsProduct,
}





