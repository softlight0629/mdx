// 图形校验码
import React, { Component } from 'react';
import { Form, Input } from 'antd';
import './index.less';

const FormItem = Form.Item;

class Captcha extends Component {
  static defaultProps = {
    show: false,
  }

  componentDidMount() {
    // 图形验证码资源文件
    const script = document.createElement('script');
    script.src = 'https://g.alicdn.com/sd/ncpc/nc.js?t=1514534550478';

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://g.alicdn.com/sd/ncpc/nc.css?t=1514534550478';

    document.head.appendChild(link);
    document.head.appendChild(script);

    if (this.props.show) {
      script.onload = () => {
        this.componentDidUpdate({ show: false });
      };
    }
  }

  componentDidUpdate(prevProps) {
    const { show, form, scene } = this.props;
    if (show && show !== prevProps.show) {
      /* eslint no-undef:0 */
      /* eslint new-cap:0 */
      this.nc = new noCaptcha();
      window.nc = this.nc;
      const nc_appkey = 'FFFF000000000179A3AD';
      const nc_token = [nc_appkey, (new Date()).getTime(), Math.random()].join(':');
      const nc_scene = scene;
      const nc_option = {
        renderTo: '#captcha_render_id',
        appkey: nc_appkey,
        scene: nc_scene,
        token: nc_token,
        callback: (data) => { // 校验成功回调
          const { setFieldsValue } = form;
          setFieldsValue({
            csessionid: data.csessionid,
            sig: data.sig,
            token: nc_token,
            scene: nc_scene,
            captcha: 'true',
          });
        },
      };
      this.nc.init(nc_option);
    }
  }

  reset() {
    const { setFieldsValue } = this.props.form;
    setFieldsValue({
      captcha: null,
    });
    if (this.nc) {
      this.nc.reset(1);
    }
  }

  render() {
    const { show } = this.props;
    const { getFieldDecorator } = this.props.form;
    return show ? (
      <div className="captcha">
        <div id="captcha_render_id" />
        {getFieldDecorator('csessionid', {})(
          <Input type="hidden" />,
        )}
        {getFieldDecorator('sig', {})(
          <Input type="hidden" />,
        )}
        {getFieldDecorator('token', {})(
          <Input type="hidden" />,
        )}
        {getFieldDecorator('scene', {})(
          <Input type="hidden" />,
        )}
        <FormItem>
          {getFieldDecorator('captcha', {
            rules: [{
              required: true,
              message: __('请拖动滑块验证'),
            }],
          })(
            <Input type="hidden" />,
          )}
        </FormItem>
      </div>
    ) : null;
  }
}

export default Captcha;
