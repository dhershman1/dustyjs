/**
 * Checks if the value is a Number
 * @param  {Number}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
const isNumber = x => Object.prototype.toString.call(x) === '[object Number]';

export default isNumber;
