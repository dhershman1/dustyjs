import curry from '../curry';

/**
 * @name removeAtIndex
 * @since v0.1.0
 * @category Array
 * @sig Number -> Array a -> Array b
 * @description Remove an item from a certain point in the index
 * @param  {Number} i   The index number to remove from
 * @param  {Array} x The array in question
 * @return {Array}     returns the modified array back
 *
 * @example
 * const test = removeAtIndex(2, [1, 2, 3, 4]); // => [1, 2, 4]
 *
 * // This is also a curried method
 *
 * const remover = removeAtIndex(2);
 * const test = remover([1, 2, 3, 4]); // => [1, 2, 4]
 */
export default curry((i, x) =>
  [...x.slice(0, i), ...x.slice(i + 1)]);
