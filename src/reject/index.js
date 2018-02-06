import complement from '../_internals/complement';
import curry from '../curry';
import filter from '../filter';

const reject = curry((fn, list) => filter(complement(fn), list));

export default reject;
