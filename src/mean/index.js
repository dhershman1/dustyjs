/**
 * @name mean
 * @since v0.1.0
 * (...Number) -> Number
 * [Number] -> Number
 * @description Get the mean of a set of numbers
 * @param  {Number} x An amount of numbers to get the mean from
 * @return {Number}   Returns the mean avg of the numbers
 *
 * @example
 * const avg = mean(1, 2, 3, 2); // => 2
 */
export default (...x) => x.reduce((a, v) => a + v, 0) / x.length;
