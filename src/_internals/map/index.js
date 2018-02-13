import curry from '../../curry';

export default curry((fn, functor) => {
  let idx = 0;
  const len = functor.length;
  const result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result;
});
