import extend from '../extend';
import isArray from '../isArray';
import isObject from '../isObject';

/**
 * @name clone
 * @description Shallow clone an object or array
 * @param  {Object} x The object that should be cloned
 * @return {Object}     Returns the shallow clone of the object
 * @example
 * const obj = clone({things: 1}); // => { things: 1 }
 * const arr = clone([1, 2, 3]); // => [1, 2, 3]
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
