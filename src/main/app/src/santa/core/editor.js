import React, { Component } from 'react';
import { QmHeader, QmBanner, QmFeature, QmFooter } from '../modules';
import { QsNav, QsCarousel, QsCardList, QsCard } from '../components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import MaterPage from './masterPage';
import compRegistar from '../common/compRegistar';

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

    const page = {
      title: 'test',
      structure: [
        // {
        //   module: 'QmHeader',
        //   type: 'module',
        //   components: [
        //     {
        //       component: 'QsNav',
        //       type: 'component',
        //     }
        //   ]
        // },
        {
          module: 'QmBanner',
          type: 'module',
          components: [
            {
              component: 'QsCarousel',
              type: 'component',
              dataRef: 'data-lkxjiu',
            }
          ],
        },
        {
          module: 'QmFeature',
          type: 'module',
          components: [
            {
              component: 'QsContainer',
              type: 'component',
              components: [
                {
                  component: 'QsCardList',
                  type: 'component',
                  dataRef: 'data-ymlxks',
                },
              ],
            }
          ]
        }
      ],
      data: {
        'data-ymlxks': {
          dataSource: [
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
          ],
        },
        'data-lkxjiu': {
          dataSource: [
            {
              type: 'img',
              src: 'https://img.alicdn.com/tps/i4/TB1ON.Rw9zqK1RjSZPxSuw4tVXa.jpg',
            },
            {
              type: 'img',
              src: 'https://img.alicdn.com/tps/i4/TB16PApxbvpK1RjSZFqSuwXUVXa.jpg_1080x1800Q60s50.jpg',
            },
          ]
        }
      }
    }

    const comps = page.structure.map(comp => compRegistar.get(comp.type, comp[comp.type]));

    const masterPage = {
      header: [{
        module: 'QmHeader',
        type: 'module',
        components: [
          {
            component: 'QsNav',
            type: 'component',
          }
        ],
      }],
      footer: [{
        module: 'QmFooter',
        type: 'module',
      }],
    }

    console.log(comps);

    return (
      <div className="santa-core-editor" ref="core" id="J-core-editor">
        <div className="santa-core-editor-canvas">
          <div className="santa-core-editor-canvas-header">
            <MaterPage.Header components={masterPage.header}/>
          </div>
          <div className="santa-core-editor-canvas-container">
            <MaterPage.Container components={page.structure} data={page.data} />
            {/* <QmBanner>
              <QsCarousel autoplay>
                <QsCarousel.Frame>
                  <img src="https://img.alicdn.com/tps/i4/TB1ON.Rw9zqK1RjSZPxSuw4tVXa.jpg" />
                </QsCarousel.Frame>
                <QsCarousel.Frame>
                  <img src="https://img.alicdn.com/tps/i4/TB16PApxbvpK1RjSZFqSuwXUVXa.jpg_1080x1800Q60s50.jpg" />
                </QsCarousel.Frame>
              </QsCarousel>
            </QmBanner>
            <QmFeature>
              <div className="s-container">
                <QsCardList
                  dataSource={cardList}
                  render={(card) => {
                    const c = QsCard.createModel(card);
                    return (<QsCard title={c.title} img={c.img} description={c.description} card={c} qmodel={c} />)
                  }}
                />
              </div>
            </QmFeature> */}
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