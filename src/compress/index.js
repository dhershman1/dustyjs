import isEmpty from '../isEmpty';

/**
 * Takes an object and compresses it down removing falsy and empty values
 * @param  {Object} x The Object to compress
 * @return {Object} Returns a new object without the unwanted values
 */
const compress = x => {
  const r = {};

  for (const p in x) {
    const y = x[p];

    if (!isEmpty(y)) {
      r[p] = y;
    }
  }

  return r;
};

export default compress;
