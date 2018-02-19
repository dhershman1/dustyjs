import curry from '../curry';
import not from '../not';

/**
 * @name complement
 * @since v0.6.0
 * @description
 * Takes a function and returns a new function that when called returns the opposite truthy/falsy value of
 * what was passed in.
 * @param {Function} pred The function we want to apply the complement of
 * @param {Any} a The value our functionality is being ran against
 * @return {Function} Returns the opposite function back
 *
 * @example
 * const isNot = complement(is(String));
 *
 * isNot(1); // => true
 * isNot('test'); // => false
 */
export default curry((pred, a) => not(pred(a)));
