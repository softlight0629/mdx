import React, { Component } from 'react';
import QrPage from '@/qr-component/QrPage';
import SaveButton from './SaveButton';
import PublishButton from './PublishButton';

import './EditorHeader.less';

class QrPageTitle extends Component {

  render() {
    return (
      <div className="name name-title">
        <span className="page-editor-title">{ this.props.title }</span>
      </div>
    )
  }
}

class EditorHeader extends Component {

  render() {
    const qrPage = {};

    return (
      <div className="qr-editor-header">
        <div className="qr-editor-header-content">
          <div className="qr-editor-header-back"></div>
          <div className="qr-editor-header-title">
            <QrPageTitle 
              title={QrPage.getFormalTitle(qrPage)}
            />
          </div>
          <div className="qr-editor-header-action">
            <div className="qr-editor-header-action-item">
              <SaveButton />
              <PublishButton />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditorHeader;