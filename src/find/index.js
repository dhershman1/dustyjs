import _isObject from '../_internals/isObject';
import curry from '../curry';

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
  let i = 0;
  const objKeys = Object.keys(x);
  const len = objKeys.length;

  for (i; i < len; i++) {
    const val = x[objKeys[i]];

    if (f(val)) {
      return val;
    }
  }

  return false;
};

/**
 * @name find
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
export default curry((f, x) => {
  if (_isObject(x)) {
    return findKeys(f, x);
  }

  return findIndex(f, x);
});
