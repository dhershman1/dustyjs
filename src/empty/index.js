import is from '../is';
import isNil from '../isNil';

/**
 * @name empty
 * @since v0.1.0
 * @sig a -> a
 * @description Empties out the items of the sent value
 * @param  {*} x The item to empty
 * @return {*} Returns the empty item
 *
 * @example
 * const obj = empty({ test: 1 }); // => {}
 * const arr = empty([1, 2, 3]); // => []
 * const str = empty('test'); // => ''
 */
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

