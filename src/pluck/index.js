import curry from '../curry';
import first from '../first';
import is from '../is';

// This will need to be updated to support list of object types
const pluckObj = (a, list) =>
  list.reduce((acc, v) => {
    if (v[a]) {
      acc.push(v[a]);
    }

    return acc;
  }, []);

export default curry((a, list) => {
  if (Array.isArray(first(list))) {
    return list.reduce((acc, v) => {
      acc.push(v[a]);

      return acc;
    }, []);
  }

  if (is(Object, first(list))) {
    return pluckObj(a, list);
  }

  return false;
});
