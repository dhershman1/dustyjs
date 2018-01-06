import isNull from '../isNull';

/**
 * @description Finds the type of the sent value
 * @param  {Any} x The value to test
 * @return {String}   Returns the string of the value type
 *
 * @example
 * type({}); // => 'Object'
 * type([]); // => 'Array'
 * type(null); // => 'Null'
 * type(undefined); // => 'Undefined'
 * type('hi'); // => 'String'
 * type(1); // => 'Number'
 * type(/1/g); // => 'RegExp'
 * type(new Date()); // => 'Date'
 * type(true); // => 'Boolean'
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