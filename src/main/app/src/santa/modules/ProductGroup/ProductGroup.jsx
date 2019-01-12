import React from 'react';
import { QsRow, QsCol, QsProduct } from '../../components'

import './ProductGroup.less'

class ProductGroup extends React.Component {

  renderProduct(product) {
    const qmodel = QsProduct.createModel(product);
    qmodel._qclass = QsProduct;

    return (
      <QsCol xs={6}>
        <QsProduct qmodel={qmodel}/>
      </QsCol>
    )
  }

  render() {
    const { dataSource = [] } = this.props.qmodel;

    return (
      <div className="m-product-group">
        <QsRow gutter={16} type="flex" justify="center">
          {
            dataSource && dataSource.map(p => this.renderProduct(p))
          }
        </QsRow>
      </div>
    )
  }
}

export default ProductGroup;