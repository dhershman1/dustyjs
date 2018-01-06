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
 * @param  {Any} n The Item to search
 * @return {Any} Returns an Array, String or Object based on whats sent in with the values found
 *
 * @example
 * const obj = fuzzySearch({thing: 2, val: 'test'}, 'te'); // => { val: 'test' }
 * const arr = fuzzySearch(['test', 'thing'], 'te'); // => ['test']
 */
const fuzzySearch = (h, n) => {
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
};

export default fuzzySearch;
