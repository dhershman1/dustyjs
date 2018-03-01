import _equal from '../_internals/equal';
import curry from '../curry';

/**
 * @name contains
 * @since v0.5.0
 * @category Collection
 * @sig a → [a] → Boolean
 * @description
 * Checks to see if the provided list contains at at least 1 of the provided value within it
 * @param {Any} a The value we want to search the list for
 * @param {Array} list The list we want to search through
 * @return {Boolean} A Boolean based on if the value is found or not
 *
 * @example
 * contains(3, [1, 2, 3]); // => true
 *
 * // It is also curried
 *
 * const checker = contains(3);
 *
 * checker([1, 2, 3]); // => true
 */
export default curry((a, list) => {
  let i = 0;
  const len = list.length;

  for (i; i < len; i++) {
    if (_equal(list[i], a)) {
      return true;
    }
  }

  return false;
});
