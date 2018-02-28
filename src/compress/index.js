import isEmpty from '../isEmpty';
import isNil from '../isNil';

/**
 * @name compress
 * @since v0.3.0
 * @category Object
 * @sig Object a -> Object b
 * @description Takes an object and compresses it down removing falsy and empty values
 * @param  {Object} x The Object to compress
 * @return {Object} Returns a new object without the unwanted values
 *
 * @example
 * const obj = compress({ thing: '', test: 1 }); // => { test: 1 }
 */
export default obj => {
  const results = {};

  for (const prop in obj) {
    const val = obj[prop];

    if (!isEmpty(val) || isNil(val)) {
      results[prop] = val;
    }
  }

  return results;
};
