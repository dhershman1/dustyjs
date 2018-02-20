/**
 * @name mean
 * @since v0.1.0
 * [Number] -> Number
 * @description Get the mean of a set of numbers
 * @param  {Array} x An amount of numbers to get the mean from
 * @return {Number} Returns the mean avg of the numbers
 *
 * @example
 * mean([1, 2, 3, 2]); // => 2
 * mean([]); // => NaN
 * mean(); // => NaN
 */
export default (x = []) => x.reduce((a, v) => a + v, 0) / x.length;
