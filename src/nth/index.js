import curry from '../curry';
import isString from '../isString';

/**
 * @description Returns the nth element of the given list or string.
 * @param  {Number} o How much to offset the value
 * @param  {String|Array} x   The Array or list to crawl through
 * @return {String|Number}        Returns the value of the found index
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
const nth = curry((o, x) => {
  const idx = o < 0 ? x.length + o : o;

  return isString(x) ? x.charAt(idx) : x[idx];
});

export default nth;
