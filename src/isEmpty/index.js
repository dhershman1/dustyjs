import not from '../not/index.js';

// To keep checks strict we sadly have to use this
/* eslint-disable no-undefined */

/**
 * @name isEmpty
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Determines if the entered value is empty or not
 * @param  {Any} x Value to check against
 * @return {Boolean} Returns the boolean after running our check
 *
 * @example
 * const arr = isEmpty([]); // => true
 * const obj = isEmpty({}); // => true
 * const str = isEmpty(''); // => true
 * const num = isEmpty(0); // => true
 */
export default x => not(Boolean(Object.keys(x).length));
