import React, { PureComponent } from 'react';
import LePopover from '@/le-component/LePopover';
import Avatar from '@/le-component/LeAvatar';
import { Menu } from 'antd';
import { __ } from '@/util/common';

import './index.less';

class User extends PureComponent {


  render() {
    const { me } = this.props;

    const menu = (
      <div className="header-user-menu">
        <div className="user-info clearfix">
          <span className="user-info-name">{me.name}</span>
          <span className="user-info-login">{me.login}</span>
        </div>
        <Menu>
          <Menu.Divider />
          <Menu.Item>
            <a href={`/${me.login}`}>
              <span className="leicon leicon-user-h" />
              <span className="text">
                <span>{__('个人页面')}</span>
              </span>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="/dashboard/docs">
              <span className="leicon leicon-doc" />
              <span className="text">
                {__('我的文档')}
              </span>
            </a>
          </Menu.Item>

          <Menu.Item>
            <a href="/dashboard/collections" onClick={() => { this.handleNew('markable-header'); }}>
              <span className="leicon leicon-star-o" />
              <span className="text">
                {__('我的收藏')}
              </span>
            </a>
          </Menu.Item>

          <Menu.Item>
            <a href="/dashboard/follows">
              <span className="leicon leicon-like-o" />
              <span className="text">
                <span>{__('我的关注')}</span>
              </span>
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <a href="/settings">
              <span className="leicon leicon-setting" />
              <span className="text">
                <span>{__('设置')}</span>
              </span>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" onClick={this.loginOut}>
              <span className="leicon leicon-logout" />
              <span className="text">
                <span>{__('退出#logout')}</span>
              </span>
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
    return (
      <div>
        <LePopover
          className="popover-header-user"
          placement="bottomRight"
          type="menu"
          content={menu}
        >
          <div className="header-user">
            <Avatar src={me.avatar_url} name={me.name} />
          </div>
        </LePopover>
      </div>
    )
  }
}

export default User;