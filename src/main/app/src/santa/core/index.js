import React, { Component } from 'react';
import Editor from './editor';

class Santa extends Component {

  render() {
    const {
      className = '',
      coreClassName = '',
      contentClassName = '',
      readOnly,
      children,
      style = {},
      ...rest
    } = this.props;

    return (
      <div className={`santa-root ${className}`} id="J-editor-root" style={style}>
        <div
          className={`santa-content ${contentClassName}`}
          id="J-editor-content"
        >
          <div className="santa-content-editor">
            <div className="santa-content-editor-core">
              <Editor 
                {...rest}
                className={coreClassName}
                readOnly={readOnly}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Santa;