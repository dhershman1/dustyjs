import _empty from '../_internals/empty';
import isEqual from '../isEqual';

/**
 * Determines if the entered value is empty or not
 * @param  {Any} x Value to check against
 * @return {Boolean} Returns the boolean after running our check
 */
export default x => x !== null && isEqual(x, _empty(x));
