import nth from '../nth';

/**
 * @name last
 * @since v0.1.0
 * @category Array
 * @sig
 * Array a -> Maybe a
 * String -> String
 * @description Grabs the last index of an array
 * @param  {Array|String} x The list or string we want to use
 * @return {Any} Returns whatever was the last piece of our array
 *
 * @example
 * const arr = last([1, 3]); // => 3
 * const str = last('abc'); // => 'c'
 */
export default x => nth(-1, x);
