
class QModel {
  constructor(option) {
    this.compId = option.compId;
    this.componentType = option.componentType;
    this.type = option.type;
    this.styleId = option.styleId || '';
    this.dataQuery = option.dataQuery || '';
  }

  getClass() {
    return this._qclass;
  }

  getProperties() {
    return this._properties;
  }
}

export default QModel;