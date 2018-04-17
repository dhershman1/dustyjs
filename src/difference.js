import curry from './curry';
import flatten from './flatten';

/**
 * @name difference
 * @since v2.0.0
 * @category Array
 * @sig Array a -> Array a -> Array a
 * @description Returns an array with the elements present in the first that are not in the second
 * @param {Array} a The list to search through
 * @param {Array} b The second list to compare against
 * @return {Array} An array of elements present in the first that are not in the second
 *
 * @example
 *
 * difference([1, 2, 3], [1]); // => [2, 3];
 *
 * // It's also curried
 * const diff = difference([1, 2, 3]);
 *
 * diff([1]); // => [2, 3]
 */
export default curry((a, [...rest]) => {
  const flatRest = flatten(rest);

  return a.filter(x => flatRest.indexOf(x) === -1);
});
