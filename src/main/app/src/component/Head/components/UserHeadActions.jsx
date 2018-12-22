import React, { Component } from 'react';
import LoginAction from '@/component/LoginAction';
import User from '@/component/User';
import HeadNewButton from './HeadNewButton';
import Notifications from '@/component/Notification';

import './UserHeadActions.less';

class UserHeadActions extends Component {

  render() {
    const { me } = this.props;

    return (
      <LoginAction me={me}>
        <ul className="UserHeadActions__list">
          <li className="UserHeadActions__item">
            <HeadNewButton />
          </li>
          <li className="UserHeadActions__item">
            <Notifications />
          </li>
          <li className="UserHeadActions__item">
            <User me={me} />
          </li>
        </ul>
      </LoginAction>
    )
  }
}

export default UserHeadActions;