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

  qmodel.qclazz = Comp;

  return (<Comp qmodel={qmodel}>{ childComps }</Comp>)
}

MasterPage.Header = (props) => {
  const { components } = props;

  return (
    <div className="masterpage-header">
      { components && components.map(comp => renderComp(comp))}
    </div>
  )
}

MasterPage.Container = (props) => {
  const { components, data } = props;

  return (
    <div className="masterpage-container">
      { components && components.map(comp => renderComp(comp, data))}
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