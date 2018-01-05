import nth from '../nth';

/**
 * @description Grabs the last index of an array
 * @return {Any} Returns whatever was the last piece of our array
 *
 * @example
 * const arr = last([1, 3]); // => 3
 * const str = last('abc'); // => 'c'
 */
const last = x => nth(-1, x);

export default last;
