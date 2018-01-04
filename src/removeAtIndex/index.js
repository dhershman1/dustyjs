/**
 * Remove an item from a certain point in the index
 * @param  {Number} i   The index number to remove from
 * @param  {Array} x The array in question
 * @return {Array}     returns the modified array back
 */
const removeAtIndex = (i, x) => [...x.slice(0, i), ...x.slice(i + 1)];

export default removeAtIndex;