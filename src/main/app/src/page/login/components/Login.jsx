import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'; 
import { Form, Input, Button, Icon, message } from 'antd';

const FormItem = Form.Item;

@inject('accountStore')
@observer
class Login extends Component {

  state = {
    submitting: false,
    errorMsg: '',
  };

  componentDidMount() {
    this.props.accountStore.getUserAccount();
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { account } = this.props.accountStore;

    return (
      <div className="account-login form-pro">
        <Form onSubmit={this.handleSubmit}>
          <FormItem className="ant-form-item-custom">
            <Input
              autoComplete="off"
              ref={(el) => { this.input = el; }}
              placeholder={'手机号/邮箱'}
              prefix={<Icon type="user" />}
              maxLength="100"
              size="large"
            />
          </FormItem>
          <FormItem>
            <Input
              className="login-password-input"
              autoComplete="off"
              placeholder={'密码'}
              prefix={<Icon type="lock" />}
              type="password"
              suffix={(
                <span className="forgot-link">
                  <a href="/password_reset">
                    <span>{'忘记密码？'}</span>
                  </a>
                </span>
              )}
              maxLength="100"
              size="large"
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" size="large" className="ant-btn-full btn-login">
              <span>登 录{ account && account.username }</span>
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login) ;
