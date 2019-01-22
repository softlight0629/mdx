import React from 'react';
import { Menu } from 'antd';
import LePopover from '@/le-component/LePopover';
import { __ } from '@/util/common'; 
import './HeadNewButton.less';

export default (props) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/new">
          <span className="leicon leicon-storehouse" />
          <span className="text">
            <span>{__('新建知识库')}</span>
          </span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/groups/new">
          <span className="leicon leicon-team" />
          <span className="text">
            <span>{__('新建团队')}</span>
          </span>
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <LePopover
      type="menu"
      content={menu}
      {...props}
    >
      <div className="HeadNewButton">
        <span className="leicon leicon-header-new" />
        <span className="leicon leicon-triangle-down" />
      </div>
    </LePopover>
  );
};