import curry from '../curry';

const search = (h, n, { nLen, hLen }) => { // eslint-disable-line complexity
  outer: for (let i = 0, j = 0; i < nLen; i++) {
    const nch = n.charCodeAt(i);

    while (j < hLen) {
      if (h.charCodeAt(j++) === nch) {
        continue outer;
      }
    }

    return false;
  }

  return true;
};

/**
 * @name fuzzySearch
 * @description Fuzzy search setup to look find things fast and effective
 * @param  {String} h The value to search for
 * @param  {String} n The Item to search
 * @return {Boolean} Returns a boolean determined by if the value is found or not by the search
 *
 * @example
 * const results = fuzzySearch('test', 'te'); // => true
 * const results = fuzzySearch('testing', 'dog'); // => false
 *
 * // search is also curried
 *
 * const searcher = fuzzySearch('test');
 * const results = searcher('te'); // => true
 */
const fuzzySearch = curry((h, n) => {
  const hLen = h.length;
  const nLen = n.length;

  if (nLen > hLen) {
    return false;
  }

  if (nLen === hLen) {
    return n === h;
  }

  return search(h, n, {
    nLen,
    hLen
  });
});

export default fuzzySearch;
