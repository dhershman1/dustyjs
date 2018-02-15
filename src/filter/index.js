import _isObject from '../_internals/isObject';
import curry from '../curry';

const objFilter = (fn, list) => {
  const entries = Object.keys(list);

  return entries.reduce((a, p) => {
    const val = list[p];

    if (fn(val)) {
      a[p] = val;
    }

    return a;
  }, {});
};


/**
 * @name filter
 * @since v0.5.0
 * @sig Filterable f => (a → Boolean) → f a → f a
 * @description Filter through a filterable data piece using the provided function
 * @param {Function} fn The predicate function to run on our values
 * @param {Array|Object} list The filterable list to go through
 * @return {Array|Object} Returns a new Array or Object based on the type of list provided
 *
 * @example
 * const isEven = n => n % 2 === 0;
 *
 * filter(isEven, [1, 2, 3, 4]); // => [2, 4]
 * filter(isEven, { a: 1, b: 2, c: 3, d: 4 }); // => { b: 2, d: 4 }
 *
 * // Is also curried
 *
 * const filterer = filter(isEven);
 *
 * filterer([1, 2, 3, 4]); // => [2, 4]
 * filterer({ a: 1, b: 2, c: 3, d: 4 }); // => { b: 2, d: 4 }
 */
export default curry((fn, list) => {
  if (_isObject(list)) {
    return objFilter(fn, list);
  }

  return list.filter(v => fn(v));
});
