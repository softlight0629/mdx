import React, { Component } from 'react';
import LePage from '@/le-component/LePage';
import SaveButton from './SaveButton';
import PublishButton from './PublishButton';

import './EditorHeader.less';

class LePageTitle extends Component {

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
      <div className="le-editor-header">
        <div className="le-editor-header-content">
          <div className="le-editor-header-back"></div>
          <div className="le-editor-header-title">
            <LePageTitle 
              title={LePage.getFormalTitle(qrPage)}
            />
          </div>
          <div className="le-editor-header-action">
            <div className="le-editor-header-action-item">
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