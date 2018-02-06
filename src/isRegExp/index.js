/**
 * @since v0.1.0
 * @sig a -> Boolean
 * @description Checks if the value is a RegExp String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 *
 * @example
 * const reg = isRegExp(/\w/g); // => true
 */
const isRegExp = x => Object.prototype.toString.call(x) === '[object RegExp]';

export default isRegExp;
