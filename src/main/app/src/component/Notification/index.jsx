import React, { Component } from 'react';
import { Badge } from 'antd';
import { __ } from '@/util/common';

import './index.less';

class Notifications extends Component {
  componentDidMount() {
    // this.getUnreadCount();
  }

  // getUnreadCount() {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'notification/getUnreadCount',
  //     payload: {},
  //   });
  // }

  render() {
    // const { notification } = this.props;
    // if (!notification) return null;

    // const { unreadCount = 0 } = notification;

    const unreadCount = 0;
    return (
      <a
        href="/notifications"
        title={unreadCount > 0 ? __('你有未读消息') : ''}
        className="notifications"
      >
        <Badge dot={unreadCount > 0}>
          <span className="qricon qricon-bell" />
        </Badge>
      </a>
    );
  }
}


export default Notifications;