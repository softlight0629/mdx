const pages = {
  'ykmlopm': {
    structure: {
      id: 'ykmlopm',
      type: 'Page',
      title: '专题',
      componentType: 'santa.core.components.QcPage',
      components: [
        // {
        //   type: 'Container',
        //   componentType: 'santa.viewer.components.StContainer',
        //   components: [
        //     {
        //       componentType: 'santa.viewer.components.StCarousel',
        //       type: 'Component',
        //       dataRef: 'data-lkxjiu',
        //     }
        //   ],
        // },
        {
          type: 'Container',
          componentType: 'santa.viewer.components.StContainer',
          components: [
            {
              componentType: 'santa.viewer.components.StList',
              type: 'Component',
              dataRef: 'data-ymlxks',
            },
          ]
        },
        {
          type: 'Component',
          componentType: 'santa.viewer.components.StButton',
          dataRef: 'data-kolijg',
        },
        {
          type: 'Component',
          componentType: 'santa.viewer.components.StBanner',
          dataRef: 'data-xklihj',
        },
      ],
      data: {
        documentData: {
          'data-ymlxks': {
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
              {
                title: '信息产业潜力爆发',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png',
                label: '留学',
              },
              {
                title: '移民顾问服务',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png',
                label: '移民',
              },
            ],
          },
          'data-xklihj': {
            img: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png',
            linkAddr: 'http://www.baidu.com',
          },
          'data-kolijg': {
            text: '测试按钮',
            linkAddr: 'http://www.baidu.com',
            bgColor: '#02B588',
          },
        },
        designData: {},
        propertyData: {},
      }
    },
  },
  'kiuoplx': {
    structure: {
      id: 'kiuoplx',
      type: 'Page',
      title: '测试',
      componentType: 'santa.core.components.QcPage',
      components: [
        {
          type: 'Component',
          componentType: 'santa.viewer.components.StButton',
          dataRef: 'data-kolijg',
        },
        {
          type: 'Component',
          componentType: 'santa.viewer.components.StBanner',
          dataRef: 'data-xklihj',
        },
      ],
      data: {
        documentData: {
          'data-ymlxks': {
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
              {
                title: '信息产业潜力爆发',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png',
                label: '留学',
              },
              {
                title: '移民顾问服务',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png',
                label: '移民',
              },
            ],
          },
          'data-xklihj': {
            img: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png',
            linkAddr: 'http://www.baidu.com',
          },
          'data-kolijg': {
            text: '测试按钮',
            linkAddr: 'http://www.baidu.com',
            bgColor: '#02B588',
          },
        },
        designData: {},
        propertyData: {},
      }
    },
  },
}


class SiteStore {

  getMasterPage() {
    return {
      header: [{
        module: 'QmHeader',
        type: 'module',
        components: [
          {
            component: 'StNav',
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

  getPageList() {
    const pageIds = Object.keys(pages);
    const pageList = [];

    for (const pageId of pageIds) {
      pageList.push({
        pageId,
        title: pages[pageId].structure.title,
      });
    }

    return pageList;
  }

  getPageData(pageId) {

    return pages[pageId];
  }
}

export default SiteStore;