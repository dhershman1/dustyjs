import curry from '../curry';
import filter from '../filter';
import juxt from '../juxt';
import reject from '../reject';

/**
 * @name partition
 * @since v0.5.0
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @description
 * Takes a predicate function and a list or filterable data object and returns the pair.
 * One contains the data which passed the predicate function, the other the values that did not.
 * @param {Function} fn The predicate function to determine which side an element belongs to
 * @param {Array} list The list or other filterable to partition through
 * @return {Array} An array containing the first set of elements that passed the predicate function,
 * And a second that did not
 *
 * @example
 * import is from 'dusty-fns/is';
 *
 * partition(is(String), ['foo', 'bar', 100]); // => [ ['foo', 'bar'], [100] ]
 * partition(is(String), { a: 'foo', b: 'bar', c: 100 }); // => [ { a: 'foo', b: 'bar' }, { c: 100 } ]
 *
 * // Is curried as well
 *
 * const part = partition(is(String));
 *
 * part(['foo', 'bar', 100]); // => [ ['foo', 'bar'], [100] ]
 * part({ a: 'foo', b: 'bar', c: 100 }); // => [ { a: 'foo', b: 'bar' }, { c: 100 } ]
 */
const partition = curry((fn, a) => {
  const part = juxt(filter, reject);

  return part(fn, a);
});

export default partition;
