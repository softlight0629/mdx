
class Feature {

  constructor() {}

  serialize = () =>({
    type: 'module',
    module: 'QmFeature',
    components: this.components.map(comp => comp.serialize()),
  })
}

export default Feature;