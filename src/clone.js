import isObject from './_internals/isObject';

/**
 * @name clone
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @description Shallow clone an object or array
 * @param  {Object} x The object that should be cloned
 * @return {Object} Returns the shallow clone of the object
 * @example
 * const obj = clone({things: 1}); // => { things: 1 }
 * const arr = clone([1, 2, 3]); // => [1, 2, 3]
 */
export default x => isObject(x) ? { ...x } : x;