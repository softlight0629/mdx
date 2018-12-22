import React from 'react';
import { Link } from 'react-router-dom';
import { __ } from '@/util/common';

import styles from './Nav.module.less';

export default (props) => (
  <div className={styles.nav}>
    <Link exact to="/dashboard">
      <span className="qricon qricon-storehouse" />
      {__('总览')}
    </Link>

    <span className={styles.split} />

    <Link exact to="/dashboard">
      <span className="qricon qricon-app" />
      {__('产品管理')}
    </Link>

    <Link exact to="/dashboard">
      <span className="qricon qricon-team" />
      {__('客户管理')}
    </Link>

    <span className={styles.split} />

    <Link exact to="/dashboard">
      <span className="qricon qricon-earth" />
      {__('访问数据')}
    </Link>

    <Link exact to="/dashboard">
      <span className="qricon qricon-star-o" />
      {__('营销工具')}
    </Link>

    <Link exact to="/dashboard">
      <span className="qricon qricon-comments" />
      {__('客户沟通')}
    </Link>
  </div>
)