import React, { Component } from 'react';

import './CardList.less';

class CardList extends Component {

  render() {
    const { dataSource =[], render } = this.props;

    return (
      <div className="s-card-list">
        <div className="s-row-flex s-row-flex-space-between s-row-flex-bottom">
           { dataSource.map(d => {

             return (
              <div className="s-col-xs-24 s-col-lg-6">
                { render(d) }
              </div>
             )
           })}
        </div>
      </div>
    )
  }
}

export default CardList;