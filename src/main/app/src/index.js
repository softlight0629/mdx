import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import './index.css';
import Root from './store/root';
import App from './App';
import * as serviceWorker from './serviceWorker';


import './view/bundles';

import { bundles } from '@/common/bundles';

const browserHistory = createBrowserHistory();

let stores = new Root();

bundles.forEach(bundle => {
  stores = Object.assign({}, stores, bundle.createStore(stores));
});

console.log(stores, 'xxxxx');

ReactDOM.render(
  <Provider { ...stores }>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>, 
  
  
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
