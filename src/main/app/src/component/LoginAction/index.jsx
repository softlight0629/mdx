import React, { Component } from 'react';
import { Button } from 'antd';
import './index.less';

class LoginAction extends Component {


  render() {
    const { me, children, place } = this.props;
    if (me) {
      return children;
    }

    return (
      <div className="login-action">
        <Button href="/login" className="login-link">登录</Button>
        <Button type="primary" href="register" className="register-link">注册</Button>
      </div>
    )
  }
}

export default LoginAction;