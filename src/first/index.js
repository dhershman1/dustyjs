import nth from '../nth';

/**
 * @name first
 * @since v0.4.0
 * @category Array
 * @sig Array a -> Maybe a
 * @description Grabs the first index of a passed array or string
 * @param  {Array|String} x The list or string we want to use
 * @return {Any} Returns whatever was the first piece of our array
 *
 * @example
 * const arr = first([1, 3]); // => 1
 * const str = first('abc'); // => 'a'
 */
export default x => nth(0, x);
