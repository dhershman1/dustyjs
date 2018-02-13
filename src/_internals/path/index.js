import curry from '../../curry';

export default curry((paths, obj) => {
  let val = obj;
  let idx = 0;

  while (idx < paths.length) {
    if (val == null) { // eslint-disable-line eqeqeq
      return false;
    }

    val = val[paths[idx]];

    idx += 1;
  }

  return val;
});
