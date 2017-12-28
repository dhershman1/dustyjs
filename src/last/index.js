import nth from '../nth';

/**
 * Grabs the last index of an array
 * @return {Any} Returns whatever was the last piece of our array
 */
const last = x => nth(-1, x);

export default last;
