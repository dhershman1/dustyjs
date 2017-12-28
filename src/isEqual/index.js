import equal from '../_internals/equal';

/**
 * Takes and compares two items
 * @param  {Any} a First item to compare
 * @param  {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 */
const isEqual = (a, b) => equal(a, b, [], []);

export default isEqual;
