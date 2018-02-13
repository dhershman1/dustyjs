import _prop from '../_internals/prop';
import curry from '../curry';
import map from '../map';

/**
 * @name pluck
 * @since v0.6.0
 * @sig k -> f {k: v} -> f v
 * @description
 * Returns a new list by finding and grabbing the same named properties off all objects supplied
 * @param {String} p The property to look for
 * @param {Array|Object} list The list to iterate through
 * @return {Array|Object} The new list which will be the same type as the list provided
 *
 * @example
 * pluck(0, [[1, 2], [3, 4]]); // => [1, 3]
 * pluck('val', { a: { val: 3 }, b: { val: 5 } }); // => { a: 3, b: 5 }
 *
 * // It is also curried
 * const plucker = pluck('a');
 *
 * plucker([{ a: 1 }, { a: 2 }]); // => [1, 2]
 */
export default curry((p, list) => map(_prop(p), list));
