import React from 'react';
import classNames from 'classnames';
import { Row, Col } from 'antd';

function __(variable) {
  return variable;
}

export default (props) => {

  const footCls = classNames({
    footer: true,
    'footer-full': true,
  });

  const defaultSpaceHost = '';

  return (
    <div className={footCls}>
      <div className="layout-container">
        {
          props.full ? (
            <div className="sitemap-container">
              <Row>
                <Col xs={24} lg={{ span: 18, push: 6 }}>
                  <Row className="sitemap">
                    <Col xs={12} sm={6}>
                      <h6 className="col-title">{__('公司')}</h6>
                      <ul className="links">
                        <li>
                          <a href={`${defaultSpaceHost}/help/about`} target="_blank">{__('关于我们')}</a>
                        </li>
                        <li>
                          <a href={`${defaultSpaceHost}/yuque/jobs`} target="_blank">{__('加入我们')}</a>
                        </li>
                        <li>
                          <a href={`${defaultSpaceHost}/terms`} target="_blank">{__('服务协议')}</a>
                        </li>
                        <li>
                          <a href={`${defaultSpaceHost}/yuque/blog`} target="_blank">{__('博客')}</a>
                        </li>
                      </ul>
                    </Col>
                    <Col xs={12} sm={6}>
                      <h6 className="col-title">{__('产品')}</h6>
                      <ul className="links">
                        <li>
                          <a href={`${defaultSpaceHost}/help/why`} target="_blank">{__('为什么选择语雀')}</a>
                        </li>
                        <li>
                          <a href={`${defaultSpaceHost}/help`} target="_blank">{__('帮助文档')}</a>
                        </li>
                        <li>
                          <a href={`${defaultSpaceHost}/pricing`} target="_blank">{__('定价')}</a>
                        </li>
                        <li>
                          <a href={`${defaultSpaceHost}/yuque/changelog`} target="_blank">{__('更新日志')}</a>
                        </li>
                      </ul>
                    </Col>
                    <Col xs={12} sm={6}>
                      <h6 className="col-title">{__('企业空间')}</h6>
                      <ul className="links">
                        <li>
                          <a href={`${defaultSpaceHost}/enterprise`} target="_blank">{__('企业入驻')}</a>
                        </li>
                      </ul>
                    </Col>
                    <Col xs={12} sm={6}>
                      <h6 className="col-title">{__('联系我们')}</h6>
                      <ul className="links">
                        <li>
                          <a href="mailto:support@yuque.com">support@yuque.com</a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} lg={{ span: 6, pull: 18 }}>
                  <div className="footer-logo">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/psMFkWcprEGezHFBZzlI.svg" alt="语雀" />
                    <div className="copyright">
                      <p>&copy; 2018 语雀</p>
                      <p>浙ICP备16025414号-3</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
              <div className="footer-container">
                <div className="links">
                  <a href="/help" target="_blank">
                    <span>帮助文档</span>
                  </a>
                  <a href="/topics" target="_blank">
                    <span>反馈</span>
                  </a>
                  <a href="/about" target="_blank">
                    <span>关于我们</span>
                  </a>
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}

