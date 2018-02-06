import _empty from '../_internals/empty';
import isEqual from '../isEqual';

/**
 * @name isEmpty
 * @since v0.1.0
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
export default x => x !== null && isEqual(x, _empty(x));
