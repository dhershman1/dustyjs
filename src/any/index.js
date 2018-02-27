import curry from '../curry';

/**
 * @name any
 * @since v0.6.0
 * @category Array
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @description
 * Loops through a provided list verifying that any value evaluates to a truthy value.
 * @param {Function} fn The function to send our values to for validation
 * @param {Array} x The list we are to loop through
 * @return {Boolean} If any values passed will return true else false
 *
 * @example
 * const data = [1, 2, 3, 4];
 *
 * any(x => x > 0, data); // => true
 * any(x => x < 3); // => true
 * any(x => x < 0, data); // => false
 *
 * // It is also curried
 *
 * const run = any(x => x > 0);
 *
 * run([1, 2, 3]); // => true
 * run([-1, 0, 1]); // => true
 * run([-3, -2, -1]); // => false
 */
export default curry((fn, x) => {
  const len = x.length;
  let i = 0;

  for (i; i < len; i++) {
    if (fn(x[i])) {
      return true;
    }
  }

  return false;
});
