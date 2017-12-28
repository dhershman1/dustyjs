/**
 * Performs a check to see if the items are identical in the sense that they reference the same memory
 * @param  {Any} a The first value to compare
 * @param  {Any} b The second value to compare
 * @return {Boolean}   Returns a boolean based on the check
 */
const identical = (a, b) => {
  if (a === b) {
    // +0 !== -0
    return a !== 0 || 1 / a === 1 / b;
  }

  // NaN === NaN
  return a !== a && b !== b; // eslint-disable-line no-self-compare
};

export default identical;
