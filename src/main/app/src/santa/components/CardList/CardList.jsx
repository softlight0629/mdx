import React, { Component } from 'react';
import { QsRow, QsCol, QsCard } from '../';

import './CardList.less';

class CardList extends Component {

  renderCard(card) {
    const qmodel = QsCard.createModel(card);

    qmodel.qclazz = QsCard;

    return <QsCard card={qmodel} qmodel={qmodel} />
  }

  render() {
    const { dataSource = [] } = this.props.qmodel;

    return (
      <div className="s-card-list">
        {/* <div className="s-row-flex s-row-flex-space-between s-row-flex-bottom">
          {dataSource.map(d => {

            return (
              <div className="s-col-xs-24 s-col-lg-6">
                {render(d)}
              </div>
            )
          })}
        </div> */}
        <QsRow type="flex" justify="space-between" align="bottom">
          {
            dataSource.map(d => {
              return (
                <QsCol xs={24} lg={6}>
                  {this.renderCard(d)}
                </QsCol>
              )
          })}
        </QsRow>
        {/* <div className="s-row-flex s-row-flex-space-between s-row-flex-bottom">
           { dataSource.map(d => {

             return (
              <div className="s-col-xs-24 s-col-lg-6">
                { render(d) }
              </div>
             )
           })}
        </div> */}
      </div>
    )
  }
}

export default CardList;