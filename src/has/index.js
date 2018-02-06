import curry from '../curry';

/**
 * @since v0.2.0
 * @sig s -> {s: x} -> Boolean
 * @description Determines if the object has a property
 * @param  {String} prop The prop to look for
 * @param  {Object} obj The Object we are searching
 * @return {Boolean} Returns based on if the prop is found or not
 *
 * @example
 * const obj = has('thing', { test: 1, thing: 2 }); // => true
 *
 * // has is also curried
 *
 * const propSet = has('thing');
 *
 * propSet({ test: 1, thing: 2 }); // => true
 */
const has = curry((prop, obj) =>
  Object.prototype.hasOwnProperty.call(obj, prop));

export default has;
