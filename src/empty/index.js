import _empty from '../_internals/empty';

/**
 * @description Empties out the items of the sent value
 * @param  {*} x The item to empty
 * @return {*} Returns the empty item
 *
 * @example
 * const obj = empty({ test: 1 }); // => {}
 * const arr = empty([1, 2, 3]); // => []
 * const str = empty('test'); // => ''
 */
const empty = x => _empty(x);

export default empty;