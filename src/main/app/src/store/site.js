
class SiteStore {

  getMasterPage() {
    return {
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
  }

  getPageData(pageId) {

    const pages = {
      'ykmlopm': {
        structure: {
          id: 'ykmlopm',
          type: 'Page',
          title: 'home',
          componentType: 'santa.core.components.QcPage',
          components: [
            // {
            //   type: 'Container',
            //   componentType: 'santa.viewer.components.QsContainer',
            //   components: [
            //     {
            //       componentType: 'santa.viewer.components.QsCarousel',
            //       type: 'Component',
            //       dataRef: 'data-lkxjiu',
            //     }
            //   ],
            // },
            {
              type: 'Container',
              componentType: 'santa.viewer.components.QsContainer',
              components: [
                {
                  componentType: 'santa.viewer.components.QsCardList',
                  type: 'Component',
                  dataRef: 'data-ymlxks',
                },
              ]
            }
          ],
          mobileComponents: [
          ],
          data: {
            documentData: {
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
            },
            designData: {},
            propertyData: {},
          }
        },
      },
    }

    return pages[pageId];
  }
}

export default SiteStore;