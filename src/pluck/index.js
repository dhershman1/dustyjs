import curry from '../curry';
import isObject from '../_internals/isObject';

/**
 * @name pluck
 * @since v0.6.0
 * @category Collection
 * @sig k -> f {k: v} -> f v
 * @description
 * Returns a new list by finding and grabbing the same named properties off all objects supplied
 * @param {String} p The property to look for
 * @param {Array|Object} list The list to iterate through
 * @return {Array|Object} The new list which will be the same type as the list provided
 *
 * @example
 * pluck('val', { a: { val: 3 }, b: { val: 5 } }); // => { a: 3, b: 5 }
 *
 * // It is also curried
 * const plucker = pluck('a');
 *
 * plucker([{ a: 1 }, { a: 2 }]); // => [1, 2]
 */
const pluck = curry((p, list) =>
  Object.keys(list).reduce((acc, v) => {
    const val = list[v];

    if (isObject(val)) {
      acc.push(...pluck(p, val));

      return acc;
    }

    if (v === p) {
      acc.push(val);
    }

    return acc;
  }, []));

export default pluck;
