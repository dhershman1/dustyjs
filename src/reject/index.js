import curry from '../curry';

/**
 * @name reject
 * @since v0.5.0
 * @sig Filterable f => (a → Boolean) → f a → f a
 * @description
 * Filter through a filterable data piece using the provided function returns only those that fail the function test
 * @param {Function} fn The predicate function to run on our values
 * @param {Array|Object} list The filterable list to go through
 * @return {Array|Object} Returns a new Array or Object based on the type of list provided
 *
 * @example
 * const isEven = n => n % 2 === 0;
 *
 * reject(isEven, [1, 2, 3, 4]); // => [1, 3]
 *
 * // Is also curried
 *
 * const rejecter = reject(isEven);
 *
 * rejecter([1, 2, 3, 4]); // => [1, 3]
 */
export default curry((fn, list) =>
  Object.keys(list).reduce((acc, prop) => {
    const val = list[prop];

    if (!fn(val)) {
      acc.push(val);
    }

    return acc;
  }, []));
