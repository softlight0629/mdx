import createComp from '../core/createComp';
import { Row as QsRow, Col as QsCol } from './Grid';

import { default as QsCarousel } from './Carousel';

import { default as QsCard } from './Card';

import { default as QsNav } from './Nav';

import { default as QsCardList } from './CardList';

import { default as QsContainer } from './Container';

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

export {
  QsRow,
  QsCol,
  QsCarousel,
  QsCard,
  QsNav,
  QsCardList,
  QsContainer,
}





