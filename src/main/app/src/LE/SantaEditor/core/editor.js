import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MaterPage from '@/LE/core/masterPage';
import '@/LE/core/components';
import '@/LE/components';

@observer
class CoreEditor extends Component {

  render() {
    const { masterPage, page, editPage } = this.props;

    return (
      <div className="santa-core-editor" ref="core" id="J-core-editor">
        <div className="santa-core-editor-canvas">
          <div className="santa-core-editor-canvas-header">
            {/* <MaterPage.Header components={masterPage.header}/> */}
          </div>
          <div className="santa-core-editor-canvas-container">
            <MaterPage.Page page={editPage} />
            <div className="santa-core-editor-canvas-footer">
              {/* <QmFooter /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoreEditor;