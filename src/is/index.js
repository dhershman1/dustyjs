import curry from '../curry';

/**
 * @name is
 * @since v0.5.0
 * @sig (* -> {*}) -> a -> Boolean
 * @description
 * See if an object is an instance of the supplied constructor, this will also check up the inheritence chain
 * @param {Object} Ctor A Constructor
 * @param {*} x The value to test
 * @return {Boolean}
 */
export default curry((Ctor, x) =>
  (x !== null && x.constructor === Ctor) || x instanceof Ctor);
