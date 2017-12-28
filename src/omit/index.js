import isArray from '../isArray';

/**
 * Create a new Array/Object by omitting the requested values
 * @param  {String} key The key(s) in which to omit from the data
 * @param  {Object} x The array or object to search through
 * @return {Object} Returns the newly created data without the omitted values
 */
const omit = (key, x) => {
  if (isArray(x)) {
    return x.filter(val => {
      if (isArray(key)) {
        return key.indexOf(val) === -1;
      }

      return key !== val;
    });
  }

  const keys = Object.keys(x);

  return keys.reduce((acc, prop) => {
    if (isArray(key) && key.indexOf(prop) === -1) {
      acc[prop] = x[prop];

      return acc;
    }

    if (!isArray(key) && key !== prop) {
      acc[prop] = x[prop];
    }

    return acc;
  }, {});
};

export default omit;
