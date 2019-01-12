import React from 'react';
import compRegistar from '../common/compRegistar';

const MasterPage = {};


const renderComp = (comp, data) => {
  const { dataRef, components } = comp;

  let childComps;
  if (components) {
    childComps = components.map(comp => renderComp(comp, data));
  }

  const Comp = compRegistar.get(comp.type, comp[comp.type]);
  const modelData = data && data[dataRef];
  const model = {
    ...modelData,
  };
  const qmodel = Comp.createModel(model);

  qmodel._qclass = Comp;

  return (<Comp qmodel={qmodel}>{ childComps }</Comp>)
}

const _renderComp = (compQ) => {
  const Comp = compQ.getClass();

  let childComps;
  if (compQ.components) {
    childComps = compQ.components.map(comp => _renderComp(comp));
  }

  return (<Comp qmodel={compQ}>{ childComps }</Comp>)
}

MasterPage.Header = (props) => {
  const { components } = props;

  return (
    <div className="masterpage-header">
      { components && components.map(comp => renderComp(comp))}
    </div>
  )
}

MasterPage.Page = (props) => {
  const { page } = props;
  const PageComp = page.getClass();

  return (
    <div className="materpage-page">
      <PageComp qmodel={page} />
    </div>
  )
}

MasterPage.Footer = (props) => {
  const { components } = props;

  return (
    <div className="masterpage-footer">
      { components && components.map(comp => renderComp(comp))}
    </div>
  )
}


export default MasterPage;