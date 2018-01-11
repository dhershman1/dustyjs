/**
 * @description Flattens an array to a single level
 * @param  {Array} x The list of arrays we want to flatten to a single level
 * @return {Array} Returns an array flattened to a single level
 *
 * @example
 * const results = flatten( [[1, 2, 3], [4, 5, 6]] ); // => [1, 2, 3, 4, 5, 6]
 */
const flatten = x => x.reduce((acc, v) => {
  acc.push(...v);

  return acc;
}, []);

export default flatten;
