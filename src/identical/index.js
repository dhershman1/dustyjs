import curry from '../curry';

/**
 * @name identical
 * @since v0.1.0
 * @sig a -> a-> Boolean
 * @description Performs a check to see if the items are identical in the sense that they reference the same memory
 * @param  {Any} a The first value to compare
 * @param  {Any} b The second value to compare
 * @return {Boolean}   Returns a boolean based on the check
 *
 * @example
 * const obj = identical(NaN, NaN); // => true
 *
 * // Identical is also curried
 *
 * const test = identical(NaN); // => Gives back a function
 * test(NaN); // => true
 */
export default curry((a, b) => {
  if (a === b) {
    // +0 !== -0
    return a !== 0 || 1 / a === 1 / b;
  }

  // NaN === NaN
  return a !== a && b !== b; // eslint-disable-line no-self-compare
});
