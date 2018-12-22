import React, { Component } from 'react';
import { QmHeader, QmBanner, QmFeature, QmFooter } from '../modules';
import { QsNav, QsCarousel, QsCardList, QsCard } from '../components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class CoreEditor extends Component {

  render() {
    const cardList = observable([
      {
        title: '在线文档编辑，团队协同首选',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/rjmsOmsQUvFqrTBaLawk.svg',
        description: '主流 Office 文件全兼容 多人协同，轻松拥有团队知识库',
      },
      {
        title: '在线文档编辑，团队协同首选',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/rjmsOmsQUvFqrTBaLawk.svg',
        description: '主流 Office 文件全兼容 多人协同，轻松拥有团队知识库',
      },
      {
        title: '在线文档编辑，团队协同首选',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/rjmsOmsQUvFqrTBaLawk.svg',
        description: '主流 Office 文件全兼容 多人协同，轻松拥有团队知识库',
      },
    ]);

    return (
      <div className="santa-core-editor" ref="core" id="J-core-editor">
        <div className="santa-core-editor-canvas">
          <div className="santa-core-editor-canvas-header">
            <QmHeader>
              <QsNav></QsNav>
            </QmHeader>
          </div>
          <div className="santa-core-editor-canvas-container">
            <QmBanner>
              <QsCarousel></QsCarousel>
            </QmBanner>
            <QmFeature>
              <div className="s-container">
                <QsCardList
                  dataSource={cardList}
                  render={(card) => {
                    const c = observable(card);
                    return (<QsCard title={c.title} img={c.img} description={c.description} card={c} qmodel={c} />)
                  }}
                />
              </div>
            </QmFeature>
            <div className="santa-core-editor-canvas-footer">
              <QmFooter />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoreEditor;