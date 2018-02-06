/**
 * @name isFunction
 * @since 0.1.0
 * @sig a -> Boolean
 * @description Determines if the value is a function
 * @param  {Object}  x The object to test against
 * @return {Boolean}   Returns boolean based on the check
 *
 * @example
 * const fun = isFunction(() => ''); // => true
 */
export default x => Object.prototype.toString.call(x) === '[object Function]';
