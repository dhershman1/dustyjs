import isArguments from '../isArguments';
import isArray from '../../isArray';
import isFunction from '../../isFunction';
import isNull from '../../isNull';
import isObject from '../../isObject';
import isString from '../../isString';

export default x => { // eslint-disable-line complexity
  if (!isNull(x)) {
    if (isFunction(x.empty)) {
      return x.empty();
    }

    if (isArray(x)) {
      return [];
    }

    if (isString(x)) {
      return '';
    }

    if (isObject(x)) {
      return {};
    }

    if (isArguments(x)) {
      (function emptyArgs(...args) {
        return args;
      }());
    }
  }

  return 0;
};
