/**
 * @name flatten
 * @since v0.4.0
 * @category Array
 * @sig [a] -> [b]
 * @description Flattens an array to a single level
 * @param  {Array} list The array list we want to flatten into a single level array
 * @return {Array} Returns an array flattened to a single level
 *
 * @example
 * const results = flatten( [[1, 2, 3], [4, 5, 6]] ); // => [1, 2, 3, 4, 5, 6]
 * const results = flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 * // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
 */
const flatten = list =>
  list.reduce((acc, x) => acc.concat(Array.isArray(x) ? flatten(x) : x), []);

export default flatten;
