/**
 * @name curry
 * @since v0.1.0
 * @sig (* -> a) -> (* -> a)
 * @description Create a curried function
 * @param  {Function} f The function we will be running
 * @param  {Any} args extra args to apply if needed
 * @return {Any} Returns based on the function sent in
 *
 * @example
 * const add = curry((a, b) => a + b);
 * add(1)(2); // => 3
 * add(1, 2); // => 3
 */
export default (f, ...args) => f.length <= args.length ? f(...args) : (...more) => curry(f, ...args, ...more); // eslint-disable-line
