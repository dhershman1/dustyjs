import isArray from '../isArray';

/**
 * @name mean
 * @since v0.1.0
 * @sig
 * (...Number) -> Number
 * [Number] -> Number
 * @description Get the mean of a set of numbers
 * @param  {Number|Array} x An amount of numbers or array of numbers
 * @return {Number}   Returns the mean avg of the numbers
 *
 * @example
 * const avg = mean(1, 2, 3, 2); // => 2
 * const avg = mean([1, 2, 3, 2]); // => 2
 */
export default (...x) => {
  let l = x.length;
  let t = 0;

  if (l === 1 && isArray(x)) {
    const [y] = x;

    l = y.length;
    t = y.reduce((a, v) => a + v, 0);
  } else {
    t = x.reduce((a, v) => a + v, 0);
  }

  return t / l;
};
