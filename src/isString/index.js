/**
 * Checks if the value is a String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
const isString = x => Object.prototype.toString.call(x) === '[object String]';

export default isString;
