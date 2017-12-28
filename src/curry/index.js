/**
 * Create a curried function
 * @param  {Function} f The function we will be running
 * @param  {Any} args extra args to apply if needed
 * @return {Any} Returns based on the function sent in
 */
const curry = (f, ...args) => f.length <= args.length ? f(...args) : (...more) => curry(f, ...args, ...more); // eslint-disable-line

export default curry;
