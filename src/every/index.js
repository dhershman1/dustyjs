import curry from '../curry';

/**
 * @name every
 * @since v0.6.0
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @description
 * Loops through a provided list verifying that every value evaluates to a truthy value.
 * @param {Function} fn The function to send our values to for validation
 * @param {Array} x The list we are to loop through
 * @return {Boolean} If all values passed will return true else false
 *
 * @example
 * const data = [1, 2, 3, 4];
 *
 * every(x => x > 0, data); // => true
 * every(x => x < 3); // => false
 *
 * // It is also curried
 *
 * const run = every(x => x > 0);
 *
 * run([1, 2, 3]); // => true
 * run([-1, 0, 1]); // => false
 */
export default curry((fn, x) => {
  const len = x.length;
  let i = 0;

  for (i; i < len; i++) {
    if (!fn(x[i])) {
      return false;
    }
  }

  return true;
});