import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StRow, StCol } from '../';
import { withEditableBundary } from '@/component/EditableBundary';

import './List.less';

@observer
class List extends Component {

  render() {
    const { listItems } = this.props.qmodel;
    return (
      <div className="s-list">
        {
          listItems && listItems.map(item => (
            <div className="s-list-item">
              <StRow>
                <StCol>
                  <div className="s-link">
                    <a className="s-link-cover" style={{ backgroundImage: `url(${item.img})` }}></a>
                    <div className="s-link-mask"></div>
                    <div className="s-link-content">{item.title}</div>
                    <div className="s-link-tag">
                      <label>{item.label}</label>
                    </div>
                  </div>
                </StCol>
              </StRow>
            </div>
          ))
        }
      </div>
    )
  }
}

export default withEditableBundary(List);