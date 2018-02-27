import curry from '../curry';

/**
 * @name find
 * @since v0.2.0
 * @category Array
 * @sig (a -> Boolean) -> Array a -> Maybe a
 * @description Find an item based on the function sent in and its list
 * @param  {Function} f The function used/called during the find
 * @param  {Object} x The list we want to search through
 * @return {Any} Returns either the found item, or false if nothing is found
 *
 * @example
 * find(v => v.val === 'test', [{val: 'test'}, {val: 'none'}]); // => { val: 'test' }
 *
 * // find is also curried
 *
 * const finder = find(v => v.val === 'test');
 *
 * finder([{val: 'test'}, {val: 'none'}]); // => { val: 'test' }
 */
export default curry((fn, x) => {
  let i = 0;
  const len = x.length;

  for (i; i < len; i++) {
    const val = x[i];

    if (fn(val)) {
      return val;
    }
  }

  return false;
});
