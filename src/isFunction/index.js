/**
 * @description Determines if the value is a function
 * @param  {Object}  x The object to test against
 * @return {Boolean}   Returns boolean based on the check
 *
 * @example
 * const fun = isFunction(() => ''); // => true
 */
const isFunction = x => Object.prototype.toString.call(x) === '[object Function]';

export default isFunction;
