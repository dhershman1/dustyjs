import curry from './curry'

// Our inner layer search
const innerSearch = (start, haystack, nChar) => {
  let j = start
  const len = haystack.length

  while (j < len) {
    if (haystack.charCodeAt(j++) === nChar) {
      return true
    }
  }

  return false
}

// Our outer layer search
const search = (haystack, needle) => {
  const len = needle.length
  const j = 0

  for (let i = 0; i < len; i++) {
    if (innerSearch(j, haystack, needle.charCodeAt(i))) {
      continue
    }

    return false
  }

  return true
}

/**
 * @name fuzzySearch
 * @since v0.3.0
 * @sig a -> Boolean
 * @category Function
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
 * const search = fuzzySearch('test');
 * const results = search('te'); // => true
 */
export default curry((h, n) => {
  const hLen = h.length
  const nLen = n.length

  if (nLen > hLen) {
    return false
  }

  if (nLen === hLen) {
    return n === h
  }

  return search(h, n)
})
