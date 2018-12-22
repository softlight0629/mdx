import React from 'react';
import { Row, Col } from 'antd';
import { Route, Switch, Redirect } from 'react-router';
import Container from '@/component/Layout/Container';
import DefaultLayout from '@/component/Layout/Default';
import Nav from '../components/Nav';
import Dashboard from './Dashboard';
import Products from './Products';
import Customers from './Customers';
import Messages from './Messages';
import Site from './Site';
import Visitors from './Visitors';

import './App.module.less';

export default (props) => (
  <DefaultLayout mode="middle">
    <Container mode="middle">
      <Row gutter={16}>
        <Col sm={4} xs={24}>
          <Nav />
        </Col>
        <Col sm={20} xs={24}>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/site" component={Site} />
            <Route exact path="/dashboard/products" component={Products} />
            <Route exact path="/dashboard/customers" component={Customers} />
            <Route exact path="/dashboard/visitors" component={Visitors} />
            <Route exact path="/dashboard/messages" component={Messages} />
            <Redirect to="/dashboard" />
          </Switch>
        </Col>
      </Row>
    </Container>
  </DefaultLayout>
)