import React, { Component } from 'react';
import { withEditableBundary } from '@/component/EditableBundary';
import { observer } from 'mobx-react';
import { StRow, StCol, StCard } from '../';
import './CardList.less';

@observer
class CardList extends Component {

  renderCard(card) {
    const qmodel = StCard.createModel(card);
    qmodel._qclass = StCard;

    return <StCard card={qmodel} qmodel={qmodel} />
  }

  render() {
    const { cards = [] } = this.props.qmodel;

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
        <StRow type="flex" justify="center" align="bottom">
          {
            cards.map(d => {
              return (
                <StCol xs={24} lg={6}>
                  {this.renderCard(d)}
                </StCol>
              )
          })}
        </StRow>
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

export default withEditableBundary(CardList);