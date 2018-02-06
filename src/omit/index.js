import curry from '../curry';
import isArray from '../isArray';

// Check if the key is an array and find the current prop within it if so
const findKey = (key, prop) => isArray(key) && key.indexOf(prop) === -1;

// Check if the key is NOT an array and make sure it isn't equal to our current prop
const compareKey = (key, prop) => !isArray(key) && key !== prop;

/**
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
const omit = curry((key, x) => {
  if (isArray(x)) {
    const keysAreArr = isArray(key);

    return x.filter(val => {
      if (keysAreArr) {
        return key.indexOf(val) === -1;
      }

      return key !== val;
    });
  }

  const keys = Object.keys(x);

  return keys.reduce((acc, prop) => {
    if (findKey(key, prop)) {
      acc[prop] = x[prop];

      return acc;
    }

    if (compareKey(key, prop)) {
      acc[prop] = x[prop];
    }

    return acc;
  }, {});
});

export default omit;
