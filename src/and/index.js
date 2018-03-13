import curry from '../curry/index.js';

/**
 * @name and
 * @since v2.0.0
 * @category Function
 * @sig Boolean -> Boolean -> Boolean
 * @description
 * Runs an and comparison on the two values passed in
 * @param {Boolean} a The first boolean to compare
 * @param {Boolean} b The second boolean to compare
 * @return {Boolean} The evaluated outcome of the parameters
 *
 * @example
 * and(true, true); // => true
 * and(true, false); // => false
 * and(false, false); // => false
 */
export default curry((a, b) => a && b);
