/**
 * Checks if the value is a RegExp String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
const isRegExp = x => Object.prototype.toString.call(x) === '[object RegExp]';

export default isRegExp;
