import _map from '../_internals/map';
import curry from '../curry';
import type from '../type';

export default curry((fn, functor) => {
  const functorType = type(functor);

  if (functorType === 'Function') {
    return (...args) => fn.call(functor.apply(args));
  }

  if (functorType === 'Object') {
    const keys = Object.keys(functor);
    const results = {};

    keys.forEach(key => {
      results[key] = fn(functor[key]);
    });

    return results;
  }

  return _map(fn, functor);
});

