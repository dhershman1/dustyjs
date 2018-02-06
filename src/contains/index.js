import curry from '../curry';
import isEqual from '../isEqual';

/**
 * @name contains
 * @since v0.5.0
 * @sig a → [a] → Boolean
 * @description
 * Checks to see if the provided list contains at at least 1 of the provided value within it
 * @param {Any} a The value we want to search the list for
 * @param {Array} list The list we want to search through
 * @return {Boolean} A Boolean based on if the value is found or not
 *
 * @example
 * contains(3, [1, 2, 3]); // => true
 * contains({ value: 1 }, [{ value: 1 }, { value: 2 }]); // => true
 * contains([42], [[42]]); // => true
 *
 * // It is also curried
 *
 * const checker = contains(3);
 *
 * checker([1, 2, 3]); // => true
 */
export default curry((a, list) => {
  let idx = 0;
  const len = list.length;

  while (idx < len) {
    if (isEqual(list[idx], a)) {
      return true;
    }

    idx += 1;
  }

  return false;
});
