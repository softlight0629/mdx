import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withEditableBundary } from '@/component/EditableBundary';

import './Button.less';

@observer
class Button extends Component {

  render() {
    const { qmodel } = this.props;

    return (
      <div className="s-button">
        <a href={`${qmodel.linkAddr}`} style={{ background: `${qmodel.bgColor}`}}>{qmodel.text}</a>
      </div>
    )
  }
}

export default withEditableBundary(Button);