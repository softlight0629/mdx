import React, { Component } from 'react';
import classNames from 'classnames';
import { Row, Col } from 'antd';

class LoadingBar extends Component {
  render() {
    const { width = '', height = '', type = '' } = this.props;
    const style = {
      width,
      height,
    }

    return (
      <div 
        className={
          classNames(
            'santa-core-loading-item',
            {
              'santa-core-loading-item-empty': type === 'empty',
            }
          )
        }
        style={style}
      />
    )
  }
}

class Loading extends Component {

  render() {
    return (
      <div className="santa-core-loading" ref="loading">
        <LoadingBar />
        <LoadingBar />
        <LoadingBar width="30%" />
        <LoadingBar type="empty" />
        <LoadingBar />
        <Row>
          <Col span={9} >
            <LoadingBar height="175px" />
          </Col>
          <Col span={14} offset={1}>
            <LoadingBar />
            <LoadingBar />
            <LoadingBar width="40%" />
            <LoadingBar />
            <LoadingBar width="80%" />
          </Col>
        </Row>
        <LoadingBar type="empty" />
        <LoadingBar />
        <LoadingBar width="30%" />
        <LoadingBar type="empty" />
        <Row>
          <Col span={14} >
            <LoadingBar />
            <LoadingBar />
            <LoadingBar width="40%" />
            <LoadingBar />
            <LoadingBar width="80%" />
          </Col>
          <Col span={9} offset={1}>
            <LoadingBar height="175px" />
          </Col>
        </Row>
      </div>
    )
  }

}

export default Loading;