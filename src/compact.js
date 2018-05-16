
/**
 * @name compact
 * @since v3.0.0
 * @category Array
 * @sig Array -> Array
 * @description Takes an array of items and removes all of the falsy values
 * @param {Array} arr The array to remove falsy values from
 * @return {Array} The stripped array
 * @example
 * compact([1, '', 0, 2]) // => [1, 2]
 */
const compact = arr =>
  arr.filter(v => Boolean(v))

export default compact
