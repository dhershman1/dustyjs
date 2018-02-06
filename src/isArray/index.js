/**
 * @name isArray
 * @since v0.1.0
 * @sig a -> Boolean
 * @description Verifies if the value is of type array
 * @param  {Array} x The value to check
 * @return {Boolean}   Returns the boolean depending on the result
 *
 * @example
 * const arr = isArray([]); // => true
 */
export default Array.isArray || function isArray(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
};
