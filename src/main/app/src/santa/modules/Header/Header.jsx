import React, { Component } from 'react';

import './Header.less';

class Header extends Component {

  render() {
    return (
      <header className="s-header">
        <div className="s-header-background"></div>
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
      </header>
    )
  }
}

export default Header;