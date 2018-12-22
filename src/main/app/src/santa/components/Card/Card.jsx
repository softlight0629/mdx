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
          {/* <img src="https://gw.alipayobjects.com/zos/rmsportal/rjmsOmsQUvFqrTBaLawk.svg" /> */}
          <img src={img} />
        </div>
        <h2 className="s-card-title">
          {/* <p>在线文档编辑，团队协同首选</p> */}
          <p>{title}</p>
        </h2>
        <div className="s-card-desc">
          {/* <p>主流 Office 文件全兼容 多人协同，轻松拥有团队知识库</p> */}
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default withEditableBundary(Card);