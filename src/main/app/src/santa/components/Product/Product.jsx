import React from 'react';

import './Product.less';
class Product extends React.Component {

  render() {
    return (
      <div className="s-product">
        <img className="s-product-img" src="https://gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01guGDi728vIdb1hmAs_!!0-item_pic.jpg" />
        <div className="s-product-title">【上海梅林】梅林糖水黄桃650g营养美味沙拉蛋糕甜点烘培食品材料</div>
      </div>
    )
  }
}

export default Product;