import compRegistar from '../common/compRegistar';


const createComp = (type, name, clazz) => compRegistar.register(type, name, clazz);

export default createComp;