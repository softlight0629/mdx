import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { bundles } from '@/common/bundles';
import { inject } from 'mobx-react';
import { flatten } from 'lodash/flatten';

@inject('accountStore')
class App extends Component {

  componentDidMount() {
    this.props.accountStore.doLogin();
  }

  render() {
    const routes = [];
    bundles.forEach(bundle => {
      const r = bundle.router;
      r.forEach(route => routes.push(<Route exact={route.exact} path={route.path} component={route.component} />))
    });

    console.log(routes);
    return (
      <div className="app">
        <Switch>
          {
            routes
          }
        </Switch>
      </div>
    );
  }
}

export default App;
