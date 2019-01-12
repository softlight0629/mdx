import QModelContainer from '@/santa/common/QModelContainer';

class Container extends QModelContainer{

  constructor(option) {
    super(option);
  }

  serialize= () => ({
    type: 'Container',
    component: 'QsContainer',
    components: this.components.map(comp => comp.serialize()),
  })
}

export default Container;