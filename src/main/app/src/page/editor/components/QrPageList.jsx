import React, { Component } from 'react';
import classNames from 'classnames';
import { inject } from 'mobx-react';

@inject('editorStore')
class QrPageList extends Component {

  renderQrPage(qrPage) {
    return (
      <span>
        <h5 className="title">
          <span className="title-text">{qrPage.title}</span>
        </h5>
      </span>
    )
  }

  edit(pageId) {
    this.props.editorStore.edit(pageId);
  }

  render() {
    const { qrSite, qrPage } = this.props;

    const qrPages = [{
      title: '首页',
      pageId: 'ykmlopm',
    },
    {
      title: '产品展示',
      pageId: 'opuytai',
    },
    {
      title: '联系我们',
    },
    ];
    return (
      <div class="qr-editor-qrpage-list-wrapper">
        {/* <div className="qrpage-list-title">
        </div> */}
        <div className="qrpage-list-body">
          <ul className="list">
            {
              qrPages.map(q => {
                return (
                  <li className="qrpage-list-item" key={q.pageId} onClick={() => this.edit(q.pageId)} >
                    <a href="javascript:void(0);" className="link">{this.renderQrPage(q)}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default QrPageList;