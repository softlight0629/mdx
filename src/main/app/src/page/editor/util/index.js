import EditPage from '../model/editPage';
import compRegistar from '@/LE/common/compRegistar';

const _createQmodel = (comp, data) => {
  const { dataRef, components } = comp;
  const { documentData } = data;

  let childComps;
  if (components) {
    childComps = components.map(comp => _createQmodel(comp, data));
  }

  const Comp = compRegistar.get(comp.type, comp.componentType);
  const modelData = documentData && documentData[dataRef];
  const model = {
    ...modelData,
  }
  const qmodel = Comp.createModel(model);

  qmodel._qclass = Comp;

  if (childComps) {
    qmodel.components = childComps;
  }

  return qmodel;
}

const _createPageComps = (components, data) => {
  return components.map(comp => _createQmodel(comp, data));
}

const convertToEditPage = (pageData) => {
  const PageComp = compRegistar.get('component', pageData.structure.componentType);
  const pageModel = PageComp.createModel({
    id: pageData.structure.id,
    title: pageData.structure.title,
  });

  pageModel._qclass = PageComp;

  pageModel.components = _createPageComps(pageData.structure.components, pageData.structure.data);

  const editPage = new EditPage({
    pageModel,
  })

  return editPage;
}

export {
  _createQmodel,
  convertToEditPage,
}