import _empty from '../_internals/empty';

/**
 * Empties out the items of the sent value
 * @param  {*} x The item to empty
 * @return {*} Returns the empty item
 */
const empty = x => _empty(x);

export default empty;