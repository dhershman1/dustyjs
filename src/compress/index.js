import isNil from '../isNil';

/**
 * @name compress
 * @since v0.3.0
 * @category Object
 * @sig Object a -> Object b
 * @description Takes an object and compresses it down removing undefined or null values
 * @param {Object} obj The Object to compress
 * @return {Object} Returns a new object without the unwanted values
 *
 * @example
 * compress({ thing: '', test: 1 }, true); // => { test: 1 }
 * compress({ thing: '', test: 1 }, false); // => { thing: '', test: 1 }
 */
export default obj => {
  const results = {};

  for (const prop in obj) {
    const val = obj[prop];

    if (!isNil(val)) {
      results[prop] = val;
    }
  }

  return results;
};
