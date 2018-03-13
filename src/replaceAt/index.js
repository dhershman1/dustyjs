import curry from '../curry/index.js';

/**
 * @name replaceAt
 * @since v0.1.0
 * @category Array
 * @sig Number -> a -> [b] -> [c]
 * @description Add an item to an array within a certain index of the array
 * @param  {Number} i The index number to add at
 * @param  {Any} t What we want to add to our array
 * @param  {Array} x The array in question
 * @return {Array} Returns the modified array
 *
 * @example
 * replaceAt(2, 10, [1, 2, 3]); // => [1, 2, 10]
 *
 * // You can also use it as a curried method
 *
 * const replacer = replaceAt(2, 10);
 *
 * replacer([1, 2, 3]); // => [1, 2, 10]
 *
 * // This can be taken further like so
 *
 * const index = replaceAt(2);
 * const val = index(10);
 * val([1, 2, 3]); // => [1, 2, 10]
 */
export default curry((i, t, x) =>
  [...x.slice(0, i), t, ...x.slice(i + 1)]);
