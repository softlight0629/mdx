import React, { Component } from 'react';
import classNames from 'classnames';

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

  render() {

    const { qrSite, qrPage } = this.props;

    const qrPages = [{
      title: '首页',
    },
    {
      title: '产品展示',
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
                  <li className="qrpage-list-item" key={q.id}>
                    <a href="" className="link">{this.renderQrPage(q)}</a>
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