/**
 * @description Verifies the item is an object
 * @param  {Object}  x The item to verify
 * @return {Boolean}     Returns true or false if the item is an object
 *
 * @example
 * const obj = isObject({}); // => true
 */
const isObject = x => Object.prototype.toString.call(x) === '[object Object]';

export default isObject;
