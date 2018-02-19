import is from '../../is';
import isNil from '../../isNil';

export default x => { // eslint-disable-line complexity
  if (!isNil(x)) {
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

  return false;
};
