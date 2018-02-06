import curry from '../curry';

/**
 * @since v0.1.0
 * @sig Number -> a -> [b] -> [c]
 * @description Add an item to an array within a certain index of the array
 * @param  {Number} i The index number to add at
 * @param  {Any} t What we want to add to our array
 * @param  {Array} x The array in question
 * @return {Array} Returns the modified array
 *
 * @example
 * const test = replaceAtIndex(2, 10, [1, 2, 3]); // => [1, 2, 10]
 *
 * // You can also use it as a curried method
 *
 * const replacer = replaceAtIndex(2, 10);
 *
 * const test = replacer([1, 2, 3]); // => [1, 2, 10]
 *
 * // This can be taken further like so
 *
 * const index = replaceAtIndex(2);
 * const val = index(10);
 * const test = val([1, 2, 3]); // => [1, 2, 10]
 */
const replaceAtIndex = curry((i, t, x) => [...x.slice(0, i), t, ...x.slice(i + 1)]);

export default replaceAtIndex;
