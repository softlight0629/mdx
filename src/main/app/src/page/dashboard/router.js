import React from 'react';
import App from './routers/App';

export default [
  {
    path: '/dashboard',
    component: App,
  },
  {
    path: '/',
    component: App,
    exact: true,
  },
]