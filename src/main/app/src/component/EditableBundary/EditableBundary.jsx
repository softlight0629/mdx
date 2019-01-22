import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './EditableBundary.less';

@inject('editorStore')
@observer
class EditableBundary extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.editorStore.inspector.inspect(this.props.qmodel);
  }

  render() {
    const { children, editable = true } = this.props;

    if (!editable) {
      return children;
    }

    return (
      <div className="qr-editable-bundary" onClick={this.handleClick.bind(this)}>
        { children }
      </div>
    )
  }
}

export const withEditableBundary = (Component, editable) => props => {
  const { qmodel, ...otherProps } = props;

  return (
    <EditableBundary qmodel={qmodel}>
      <Component {...otherProps} qmodel={qmodel} />
    </EditableBundary>
  )
}

export default EditableBundary;