import React, { Component } from 'react';
import { Tabs } from 'antd';
import { inject } from 'mobx-react';


const TabPane = Tabs.TabPane;

@inject('editorStore')
class ResourcePanel extends Component {

  handleAddComponent(component, modelData = {}) {
    this.props.editorStore.addComponent(component, modelData);
  }

  render() {

    return (
      <div className="qr-editor-resource-panel">
        <h3>添加组件</h3>
        <div className="resource-list">
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            style={{ height: '100%' }}
          >
            <TabPane tab="Banner" key="1">
              <div className="resouce-list-item" onClick={() => this.handleAddComponent('santa.viewer.components.QsBanner', {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png',
                linkAddr: 'http://www.baidu.com',
              })}>
                <div className="resource-component">
                  <span className="resource-component-image">
                    <img width="280" src="https://gw.alipayobjects.com/os/q/cms/images/jnlh10g7/0993e70d-7d4f-4e65-86d6-dfbb14a7da05.cms/images/0178ff2a-35ba-4c8c-9b54-29df6688b0c4.png?x-oss-process=image/resize,w_560/crop,h_560" />
                  </span>
                </div>
              </div>
            </TabPane>
            <TabPane tab="列表" key="2">
              <div className="resouce-list-item" onClick={() => this.handleAddComponent('santa.viewer.components.QsList', {
                listItems: [
                  {
                    title: '银行存款证明',
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png',
                    label: '金融',
                  },
                  {
                    title: '金币种信用卡',
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png',
                    label: '信用卡',
                  },
                ],
              })}>
                <div className="resource-component">
                  <span className="resource-component-image">
                    <img width="280" src="https://gw.alipayobjects.com/os/q/cms/images/jnlh7zmx/bfdef3f6-7b6f-4281-ade5-0f43a85114f4.cms/images/3aeab569-de05-4e46-b72a-550d93e3f0f2.png?x-oss-process=image/resize,w_560/crop,h_560" />
                  </span>
                </div>
              </div>
            </TabPane>
            <TabPane tab="按钮" key="4">
              <div className="resouce-list-item">
                <div className="resource-component" onClick={() => this.handleAddComponent('santa.viewer.components.QsButton', {
                  text: '测试按钮',
                  linkAddr: 'http://www.baidu.com',
                  bgColor: '#02B588',
                })}>
                  <span className="resource-component-image">
                    <img width="280" src="https://gw.alipayobjects.com/os/q/cms/images/jnlh1544/a8451356-14f1-4d23-b956-9479fff2017b.cms/images/ed921d65-3228-4ba3-94c6-c1b9adccc9b3.png?x-oss-process=image/resize,w_560/crop,h_560" />
                  </span>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ResourcePanel;