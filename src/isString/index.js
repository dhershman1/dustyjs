/**
 * @since v0.1.0
 * @sig a -> Boolean
 * @description Checks if the value is a String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 *
 * @example
 * const str = isString('test'); // => true
 */
const isString = x => Object.prototype.toString.call(x) === '[object String]';

export default isString;
