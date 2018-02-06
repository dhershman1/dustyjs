/**
 * @name isNull
 * @since v0.1.0
 * @sig a -> Boolean
 * @description Checks if the value is a null value
 * @param  {Object}  x The object to test against
 * @return {Boolean}     Returns a boolean based on the check
 *
 * @example
 * const nu = isNull(null); // => true
 */
export default x => x === null;
