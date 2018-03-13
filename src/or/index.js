import curry from '../curry/index.js';

/**
 * @name or
 * @since v2.0.0
 * @category Function
 * @sig Boolean -> Boolean -> Boolean
 * @description
 * Runs an or comparison on the two values passed in
 * @param {Boolean} a The first boolean to compare
 * @param {Boolean} b The second boolean to compare
 * @return {Boolean} The evaluated outcome of the parameters
 *
 * @example
 * or(true, true); // => true
 * or(true, false); // => true
 * or(false, false); // => false
 */
export default curry((a, b) => a || b);
