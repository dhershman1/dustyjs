import extend from '../extend';
import isArray from '../isArray';
import isObject from '../isObject';

/**
 * Shallow clone an object or array
 * @param  {Object} x The object that should be cloned
 * @return {Object}     Returns the shallow clone of the object
 */
const clone = x => {
  if (isObject(x)) {
    return extend(x);
  }

  if (isArray(x)) {
    return x.slice();
  }

  return x;
};

export default clone;
