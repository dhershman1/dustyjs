import is from '../../is';
import isNull from '../../isNull';

export default x => { // eslint-disable-line complexity
  if (!isNull(x)) {
    if (is(Function, x.empty)) {
      return x.empty();
    }

    if (is(Array, x)) {
      return [];
    }

    if (is(String, x)) {
      return '';
    }

    if (is(Object, x)) {
      return {};
    }
  }

  return 0;
};
