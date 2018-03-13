import curry from '../curry/index.js';

/**
 * @name uniq
 * @since v2.0.0
 * @category Array
 * @sig (a -> b) -> Array a -> Array a
 * @description Returns an array of unique values from the applied function
 * @param {Function} fn The function to apply
 * @param {Array} list The list to sift through
 * @return {Array} An array of uniq values from the provided function
 *
 * @example
 *
 * uniq(x => x > 2, [1, 2, 3, 4, 5]); // => [3, 4, 5]
 *
 * // It is also curried
 *
 * const uq = uniq(x => x > 2);
 *
 * uq([1, 2, 3, 4, 5]); // => [3, 4, 5]
 */
export default curry((fn, list) =>
  list.reduce((acc, a) => {
    if (acc.map(fn).indexOf(fn(a)) === -1) {
      return acc.concat(a);
    }

    return acc;
  }, []));
