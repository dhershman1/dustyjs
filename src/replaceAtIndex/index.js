/**
 * @description Add an item to an array within a certain index of the array
 * @param  {Number} i    The index number to add at
 * @param  {Object|Array|Number|String} t What we want to add to our array
 * @param  {Array} x  The array in question
 * @return {Array}      Returns the modified array
 *
 * @example
 * const test = replaceAtIndex(2, 10, [0, 1, 2, 3]); // => [0, 1, 10, 3]
 */
const replaceAtIndex = (i, t, x) => [...x.slice(0, i), t, ...x.slice(i + 1)];

export default replaceAtIndex;
