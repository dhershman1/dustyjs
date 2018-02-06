import equal from '../_internals/equal';

/**
 * @since v0.1.0
 * @sig a -> b -> Boolean
 * @description Takes and compares two items
 * @param  {Any} a First item to compare
 * @param  {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 *
 * @example
 * const obj = isEqual({}, {}); // => true
 * const arr = isEqual([], []); // => true
 */
const isEqual = (a, b) => equal(a, b, [], []);

export default isEqual;
