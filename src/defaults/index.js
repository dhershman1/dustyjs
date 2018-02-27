import clone from '../clone';
import curry from '../curry';

/**
 * @name defaults
 * @since v0.5.0
 * @category Object
 * @sig Object a -> Object b -> Maybe Object c
 * @description
 * Applies default properties to an object that does not contain the smae or contains falsey values on those properties
 * @param {Object} a The default object to reference
 * @param {Object} b The data object to loop through
 * @return {Object} A New object
 *
 * @example
 * const data = { thing: 4 };
 *
 * defaults({ test: 1, thing: 2 }, data); // => { test: 1, thing: 4 }
 */
export default curry((a, b) => {
  const results = clone(b);

  for (const prop in a) {
    if (!b[prop]) {
      results[prop] = a[prop];
    }
  }

  return results;
});
