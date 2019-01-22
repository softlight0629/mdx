import React, { Component } from 'react';
import { withEditableBundary } from '@/component/EditableBundary';

import './Card.less';
import { observer } from 'mobx-react';

@observer
class Card extends Component {

  render() {
    const { img, title, description } = this.props.card;

    return (
      <div className="s-card">
        <div className="s-card-img">
          <img src={img} />
        </div>
        <h2 className="s-card-title">
          <p>{title}</p>
        </h2>
        <div className="s-card-desc">
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default withEditableBundary(Card);