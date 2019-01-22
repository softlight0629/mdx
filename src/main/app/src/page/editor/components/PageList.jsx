import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('editorStore', 'siteStore')
class PageList extends Component {

  renderPageItem(page) {
    return (
      <span>
        <h5 className="title">
          <span className="title-text">{page.title}</span>
        </h5>
      </span>
    )
  }

  edit(pageId) {
    this.props.editorStore.edit(pageId);
  }

  render() {
    const pageList = this.props.siteStore.getPageList();

    return (
      <div class="le-editor-page-list-wrapper">
        <div className="page-list-body">
          <ul className="list">
            {
              pageList && pageList.map(page => {
                return (
                  <li className="page-list-item" key={page.pageId} onClick={() => this.edit(page.pageId)} >
                    <a href="javascript:void(0);" className="link">{this.renderPageItem(page)}</a>
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

export default PageList;