import React from 'react';
import classname from 'classnames';
import './ProFormLayout.less';

const Layout = (props) => {
  const { className } = props;
  const cls = classname('qr', 'page-account', className);
  return (
    <div className={cls}>
      <div className="main-wrapper">
        <div className="layout-container">
          <div className="le-form">
            <div className="le-form-main">
              <div className="le-form-content form-pro">
                <div className="account-slogon"></div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;