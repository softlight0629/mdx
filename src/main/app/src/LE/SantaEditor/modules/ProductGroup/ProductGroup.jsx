import React from 'react';
import { StRow, StCol, StProduct } from '../../components'

import './ProductGroup.less'

class ProductGroup extends React.Component {

  renderProduct(product) {
    const qmodel = StProduct.createModel(product);
    qmodel._qclass = StProduct;

    return (
      <StCol xs={6}>
        <StProduct qmodel={qmodel}/>
      </StCol>
    )
  }

  render() {
    const { dataSource = [] } = this.props.qmodel;

    return (
      <div className="m-product-group">
        <StRow gutter={16} type="flex" justify="center">
          {
            dataSource && dataSource.map(p => this.renderProduct(p))
          }
        </StRow>
      </div>
    )
  }
}

export default ProductGroup;