import curry from '../curry';
import flatten from '../flatten';

/**
 * @name union
 * @since v2.0.0
 * @category Array
 * @sig Array a -> Array a -> Array a
 * @description
 * Computes the union of the passed-in arrays: the list of unique items,
 * in order, that are present in one or more of the arrays.
 * @param {Array} a An array to put through combining
 * @param {Array} rest The rest of the arrays
 * @return {Array} A new array of unique values from each of the passed in arrays
 *
 * @example
 *
 * union([1, 2, 3], [3, 4, 5]); // => [1, 2, 3, 4, 5]
 * union([1, 2, 3], [[3, 4, 5], [4, 5, 6]]); // => [1, 2, 3, 4, 5, 6]
 *
 * // It's also curried
 *
 * const un = union([1, 2, 3]);
 *
 * un([3, 4, 5]); // => [1, 2, 3, 4, 5]
 * un([[3, 4, 5], [4, 5, 6]]); // => [1, 2, 3, 4, 5, 6]
 */
export default curry((a, [...rest]) => {
  const flatRest = flatten(rest);

  return a.concat(flatRest).reduce((acc, v) => {
    if (acc.indexOf(v) === -1) {
      return acc.concat(v);
    }

    return acc;
  }, []);
});
