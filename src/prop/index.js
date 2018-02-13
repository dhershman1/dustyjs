import _path from '../_internals/path';
import curry from '../curry';

/**
 * @name prop
 * @since v0.6.0
 * @sig k -> {k: v} -> v | Undefined
 * @description
 * Brings back the indicated property of an object if it exists
 * @param {String} p The property we want to look for
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
export default curry((p, obj) => _path([p], obj));
