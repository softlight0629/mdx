import createApp from '@/common/createApp';
import router from '@/page/editor/router';
import createStore  from '@/page/editor/stores';

export default createApp({
  createStore,
  router,
});