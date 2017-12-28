/**
 * Find items based on index
 * @param  {Function} f The function to use to check items
 * @param  {Array} x The array to sift through
 * @return {Any} Returns the value found or false if nothing is found
 */
export const findIndex = (f, x) => {
  const l = x.length;
  let i = 0;

  while (i < l) {
    if (f(x[i])) {
      return x[i];
    }

    i += 1;
  }

  return false;
};

/**
 * Find items based on keys
 * @param  {Function} f The function to use to check items
 * @param  {Array} x The array to sift through
 * @return {Any} Returns the value found or false if nothing is found
 */
export const findKeys = (f, x) => {
  let prop = '';

  for (prop in x) {
    if (f(x[prop])) {
      return x[prop];
    }
  }

  return false;
};
