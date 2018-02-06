/**
 * @name juxt
 * @since v0.5.0
 * @sig (a, b, …, m) → n → ((a, b, …, m) → [n])
 * @description Applies the provided function and turns them into a single function you can use on a value
 * @param {Function} fns The functions to apply
 * @return {Function} The function you can use on your data value
 *
 * @example
 * const getRange = juxt(Math.min, Math.max);
 *
 * getRange(3, 4, 9, -3); // => [-3, 9]
 */
export default (...fns) =>
  (...x) => fns.map(f => f(...x));
