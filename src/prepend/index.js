import curry from '../curry';

/**
 * @name prepend
 * @since v0.5.0
 * @category Array
 * @sig a -> [a] -> [a]
 * @description Returns a new list with the provided value at the front of the given list
 * @param  {Any} x The value we want to put at the front of our list
 * @param  {Array} list The Array or list to prepend to
 * @return {Array} A new array
 *
 * @example
 * const i = nth(3, [1, 2, 3, 4, 5, 6, 7]); // => 4
 *
 * // nth is curried
 *
 * const third = nth(2);
 *
 * third([1, 2, 3, 4, 5]); // => 3
 */
export default curry((x, list) => [x, ...list]);
