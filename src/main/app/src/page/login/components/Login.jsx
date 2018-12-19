import React, { Component } from 'react';
import { Form, Input, Button, Icon, message } from 'antd';
import Captcha from '@/component/Captcha';

class Login extends Component {

  state = {
    submitting: false,
    errorMsg: '',
  };

  componentDidMount() {
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;

    return (
      <div className="account-login form-pro">
        <Form onSubmit={this.handleSubmit}>
          <FormItem className="ant-form-item-custom">
            {getFieldDecorator('login', {
              rules: [{
                required: true,
                message: __('请输入手机号码或邮箱'),
              }],
            })(
              <Input
                autoComplete="off"
                ref={(el) => { this.input = el; }}
                placeholder={__('手机号/邮箱')}
                prefix={<Icon type="user" />}
                maxLength="100"
                size="large"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: __('请输入密码'),
              }],
            })(
              <Input
                className="login-password-input"
                autoComplete="off"
                placeholder={__('密码')}
                prefix={<Icon type="lock" />}
                type="password"
                suffix={(
                  <span className="forgot-link">
                    <a href="/password_reset">
                      <span>{__('忘记密码？')}</span>
                    </a>
                  </span>
                )}
                maxLength="100"
                size="large"
              />
            )}
            {this.state.errorMsg === 'password' && (
              <div className="ant-form-explain ant-form-explain-custom">
                {errors}
              </div>
            )}
          </FormItem>
        </Form>
      </div>
    )
  }

}
