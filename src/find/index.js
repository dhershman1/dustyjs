import { findIndex, findKeys } from '../_internals/find';
import isObject from '../isObject';

/**
 * Find an item based on the function sent in and its list
 * @param  {Function} f The function used/called during the find
 * @param  {Object} x The list we want to search through
 * @return {Any} Returns either the found item, or false if nothing is found
 */
const find = (f, x) => {
  if (isObject(x)) {
    return findKeys(f, x);
  }

  return findIndex(f, x);
};

export default find;
