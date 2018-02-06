import curry from '../curry';
import is from '../is';

const objReject = (fn, list) => {
  const results = {};

  for (const prop in list) {
    if (!fn(list[prop])) {
      results[prop] = list[prop];
    }
  }

  return results;
};

const reject = curry((fn, list) => {
  if (is(Array, list)) {
    return list.filter(v => !fn(v));
  }

  if (is(Object, list)) {
    return objReject(fn, list);
  }

  return list;
});

export default reject;
