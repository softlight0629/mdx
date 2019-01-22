
const components = {};

export default {
  register(type, name, clazz) {
    components[`${type}.${name}`] = clazz;
  },

  component(name) {
    return components[`component.${name}`];
  },

  module(name) {
    return components[`module.${name}`];
  },

  get(type, name) {
    return this.component(name);
  },
}