import isNull from '../isNull';

/**
 * Finds the type of the sent value
 * @param  {Any} x The value to test
 * @return {String}   Returns the string of the value type
 */
const type = x => {
  if (isNull(x)) {
    return 'Null';
  }
  if (x === undefined) { // eslint-disable-line no-undefined
    return 'Undefined';
  }

  return Object.prototype.toString.call(x).slice(8, -1);
};

export default type;