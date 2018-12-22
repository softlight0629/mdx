import React from 'react';
import Editor from './routers/Editor';

import './index.less';

export default [
  {
    path: '/sites/:siteId/edit',
    component: Editor,
  }
]