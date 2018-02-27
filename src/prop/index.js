import curry from '../curry';
import isEmpty from '../isEmpty';
import isNil from '../isNil';

/**
 * @name prop
 * @since v0.6.0
 * @category Object
 * @sig k -> Object k v -> Maybe v
 * @description
 * Brings back the indicated property of an object if it exists
 * @param {Array} p The array path of the property we are looking for
 * @param {Object} obj The object to search through
 * @return {Any} The value that exists at 'obj.p'
 *
 * @example
 * prop('thing', { thing: 'test' }); // => 'test'
 * prop('thing', {}); // => undefined
 *
 * // It is also curried
 *
 * const proper = prop('a');
 *
 * proper({ a: 1, b: 2 }); // => 1
 */
const prop = curry(([p, ...rest], obj) => {
  if (isEmpty(rest) || isNil(obj[p])) {
    return obj[p];
  }

  return prop(rest, obj[p]);
});

export default prop;
