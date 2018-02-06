import curry from '../curry';
import isEqual from '../isEqual';

const contains = curry((a, list) => {
  let idx = 0;
  const len = list.length;

  while (idx < len) {
    if (isEqual(list[idx], a)) {
      return idx;
    }

    idx += 1;
  }

  return -1;
});

export default contains;
