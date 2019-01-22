import React, { Component } from 'react';
import classNames from 'classnames';
import LeLogo from './components/LeLogo';
import Container from '../Layout/Container';
import LoginAction from '../LoginAction';
import UserHeadActions from './components/UserHeadActions';

import './index.less';
import { observer, inject } from 'mobx-react';

@inject('accountStore')
@observer
class Head extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { me } = this.props.accountStore;

    const headerCls = classNames({
      header: true,
      'header-theme-light': true,
    });
    const searchCls = classNames({
      'header-search': true,
      'header-nav-left': true,
    });

    return (
      <div className={headerCls}>
        <Container>
          <LeLogo />
          <div className="header-nav header-nav-right">
            <UserHeadActions 
              me={me}
            />
          </div>
        </Container>
      </div>
    )
  }
}

export default Head;