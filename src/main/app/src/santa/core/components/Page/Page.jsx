import React, { Component } from 'react';
import { observer } from 'mobx-react';

const _renderComp = (compQ) => {
  const Comp = compQ.getClass();

  let childComps;
  if (compQ.components) {
    childComps = compQ.components.map(comp => _renderComp(comp));
  }

  return (<Comp qmodel={compQ}>{ childComps }</Comp>)
}

@observer
class Page extends Component {
  
  render() {
    const { components } = this.props.qmodel;

    return (
      <div className="s-core-page">
        { components && components.map(comp => _renderComp(comp) )}
      </div>
    )
  }
}

export default Page;