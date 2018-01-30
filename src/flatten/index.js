import isArray from '../isArray';

/**
 * @description Flattens an array to a single level
 * @param  {Array} x The list of arrays we want to flatten to a single level
 * @return {Array} Returns an array flattened to a single level
 *
 * @example
 * const results = flatten( [[1, 2, 3], [4, 5, 6]] ); // => [1, 2, 3, 4, 5, 6]
 * const results = flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 * // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
 */
const flatten = list => list.reduce((acc, v) => {
  if (isArray(v)) {
    acc.push(...flatten(v));

    return acc;
  }

  acc.push(v);

  return acc;
}, []);

export default flatten;
