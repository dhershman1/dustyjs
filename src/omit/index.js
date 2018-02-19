import contains from '../contains';
import curry from '../curry';
import ensureArray from '../ensureArray';
import not from '../not';

/**
 * @name omit
 * @since v0.4.0
 * @sig
 * [String] -> {String: *} -> {String: *}
 * [String] -> [String] -> [String]
 * String -> {String: *} -> {String: *}
 * String -> [String] -> [String]
 * @description Create a new Array/Object by omitting the requested values
 * @param  {String} key The key(s) in which to omit from the data
 * @param  {Object} x The array or object to search through
 * @return {Object} Returns the newly created data without the omitted values
 *
 * @example
 * const obj = omit('test', { test: '3432', thing: 123 }); // => { thing: 123 }
 * const arr = omit(['a', 'b'], { a: 1, b: 2, c: 3}); // => { c: 3 }
 *
 * // omit is curried
 *
 * const omitKeys = omit('test');
 *
 * omitKeys({ test: '3432', thing: 123 }); // => { thing: 123 }
 */
export default curry((key, x) => {
  const keyArr = ensureArray(key);

  if (Array.isArray(x)) {
    return x.filter(val => keyArr.indexOf(val) === -1);
  }

  return Object.keys(x).reduce((acc, prop) => {
    if (not(contains(prop, keyArr))) {
      acc[prop] = x[prop];

      return acc;
    }

    return acc;
  }, {});
});
