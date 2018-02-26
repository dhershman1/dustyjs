import nth from '../nth';

/**
 * @name min
 * @since v1.0.0
 * @description
 * Goes through an array of values and grabs the first value of the array when it's been sorted
 * @param {Array} x The Array to sort and grab from
 * @return {Any} Returns the item at the start of an array based on what's passed in
 *
 * @example
 * min([1, 3, 2, 5, 4]); // => 1
 * min(['c', 'a', 'b', 'f']); // => 'a'
 */
export default x => nth(0, x.sort((a, b) => a > b));
