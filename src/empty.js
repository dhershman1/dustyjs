import type from './type';

/**
 * @name empty
 * @since v0.1.0
 * @category Function
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
export default x => {
  if (type(x) === 'Array') {
    return [];
  }

  if (type(x) === 'String') {
    return '';
  }

  if (type(x) === 'Object') {
    return {};
  }

  throw new TypeError('Empty requires an emptyable type, like a String or Array');
};

