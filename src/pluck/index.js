import curry from '../curry';
import isObject from '../_internals/isObject';
import map from '../map';
import prop from '../prop';

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
const pluck = curry((p, list) => {

  if (Array.isArray(list)) {
    return map(prop([p]), list);
  }

  return Object.keys(list).reduce((acc, v) => {
    if (v === p) {
      acc.push(list[v]);
    }

    if (isObject(list[v])) {
      acc.push(...pluck(p, list[v]));
    }

    return acc;
  }, []);
});

export default pluck;
