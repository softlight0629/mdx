
class Banner {

  constructor() {
  }

  serialize = () =>({
    type: 'module',
    module: 'QmBanner',
    components: this.components.map(comp => comp.serialize()),
  })
}

export default Banner;