import StModelContainer from '@/LE/common/StModelContainer';

class Container extends StModelContainer{

  constructor(option) {
    super(option);
  }

  serialize= () => ({
    type: 'Container',
    component: 'StContainer',
    components: this.components.map(comp => comp.serialize()),
  })
}

export default Container;