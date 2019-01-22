import React from 'react';
import { Link } from 'react-router-dom';
import { __ } from '@/util/common';

import styles from './Nav.module.less';

export default (props) => (
  <div className={styles.nav}>
    <Link exact to="/dashboard">
      <span className="leicon leicon-storehouse" />
      {__('总览')}
    </Link>

    <span className={styles.split} />

    <Link exact to="/dashboard">
      <span className="leicon leicon-app" />
      {__('站点')}
    </Link>

    <Link exact to="/dashboard">
      <span className="leicon leicon-team" />
      {__('成员')}
    </Link>

    <span className={styles.split} />

    <Link exact to="/dashboard">
      <span className="leicon leicon-earth" />
      {__('域名')}
    </Link>

    <Link exact to="/dashboard">
      <span className="leicon leicon-star-o" />
      {__('域名')}
    </Link>

    <Link exact to="/dashboard">
      <span className="leicon leicon-comments" />
      {__('设置')}
    </Link>
  </div>
)