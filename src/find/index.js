import curry from '../curry';
import isObject from '../isObject';

const findIndex = (f, x) => {
  const l = x.length;
  let i = 0;

  while (i < l) {
    if (f(x[i])) {
      return x[i];
    }

    i += 1;
  }

  return false;
};

const findKeys = (f, x) => {
  let prop = '';

  for (prop in x) {
    if (f(x[prop])) {
      return x[prop];
    }
  }

  return false;
};

/**
 * @since v0.2.0
 * @sig (a -> Boolean) -> [a] -> a | Boolean
 * @description Find an item based on the function sent in and its list
 * @param  {Function} f The function used/called during the find
 * @param  {Object} x The list we want to search through
 * @return {Any} Returns either the found item, or false if nothing is found
 *
 * @example
 * const obj = find(v => v.val === 'test', {val: 'test'}); // => 'test'
 * const arr = find(v => v.val === 'test', [{val: 'test'}, {val: 'none'}]); // => { val: 'test' }
 *
 * // find is also curried
 *
 * const finder = find(v => v.val === 'test');
 *
 * finder({val: 'test'}); // => 'test'
 * finder([{val: 'test'}, {val: 'none'}]); // => { val: 'test' }
 */
const find = curry((f, x) => {
  if (isObject(x)) {
    return findKeys(f, x);
  }

  return findIndex(f, x);
});

export default find;
