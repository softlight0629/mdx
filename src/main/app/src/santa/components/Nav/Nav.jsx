import React, { Component } from 'react';

import './Nav.less';

class Nav extends Component {

  render() {
    return (
      <nav className="s-nav">
        <ul className="s-nav-list">
          <li className="s-nav-list-item">
            <a href="" className="s-link">
              <span>首页</span>
            </a>
          </li>
          <li className="s-nav-list-item">
            <a href="" className="s-link">
              <span>产品展示</span>
            </a>
          </li>
          <li className="s-nav-list-item">
            <a href="" className="s-link">
              <span>联系我们</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;