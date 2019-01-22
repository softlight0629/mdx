import React from 'react';
import { Router, Switch, Route } from 'react-router'
import ProFormLayout from '@/component/Layout/ProFormLayout';
import Login from '../components/Login';

const Layout = (props) => {

  return (
    <Router history={props.history}>
      <Switch>
        <Route
          path="/login"
          render={() => (
            <ProFormLayout
              slogonMain="欢迎回来"
              className="le-login"
            >
              <Login />
            </ProFormLayout>
          )}
        >
        </Route>
      </Switch>
    </Router>
  )
}

export default Layout;