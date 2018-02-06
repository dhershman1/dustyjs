import curry from '../curry';

/**
 * @description
 * See if an object is an instance of the supplied constructor, this will also check up the inheritence chain
 * @since v0.5.0
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} Ctor A Constructor
 * @param {*} x The value to test
 * @return {Boolean}
 */
const is = curry((Ctor, x) => (x !== null && x.constructor === Ctor) || x instanceof Ctor);


export default is;
