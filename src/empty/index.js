import _empty from '../_internals/empty';

/**
 * @name empty
 * @since v0.1.0
 * @sig a -> a
 * @description Empties out the items of the sent value
 * @param  {*} x The item to empty
 * @return {*} Returns the empty item
 *
 * @example
 * const obj = empty({ test: 1 }); // => {}
 * const arr = empty([1, 2, 3]); // => []
 * const str = empty('test'); // => ''
 */
export default x => _empty(x);
