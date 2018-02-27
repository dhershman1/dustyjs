import isEmpty from '../isEmpty';

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
export default x => {
  const r = {};

  for (const p in x) {
    const y = x[p];

    if (!isEmpty(y)) {
      r[p] = y;
    }
  }

  return r;
};
