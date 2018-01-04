/**
 * Verifies if the value is of type array
 * @param  {Array} x The value to check
 * @return {Boolean}   Returns the boolean depending on the result
 */
const isArray = Array.isArray || function isArray(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
};

export default isArray;