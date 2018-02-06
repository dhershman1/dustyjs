import curry from '../curry';
import reduce from '../_internals/reduce';

const filter = curry((fn, list) => reduce(fn, list));

export default filter;
