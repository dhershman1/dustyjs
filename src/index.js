import { findIndex, findKeys } from './internals/find';
import _empty from './internals/empty';
import equal from './internals/equal';

/**
 * Create a curried function
 * @param  {Function} f The function we will be running
 * @param  {Any} args extra args to apply if needed
 * @return {Any} Returns based on the function sent in
 */
export const curry = (f, ...args) => f.length <= args.length ? f(...args) : (...more) => curry(f, ...args, ...more);

/**
 * Verifies if the value is of type array
 * @param  {Array} x The value to check
 * @return {Boolean}   Returns the boolean depending on the result
 */
export const isArray = Array.isArray || function isArray(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
};

/**
 * Verifies the item is an object
 * @param  {Object}  x The item to verify
 * @return {Boolean}     Returns true or false if the item is an object
 */
export const isObject = x => Object.prototype.toString.call(x) === '[object Object]';

/**
 * Determines if the value is a function
 * @param  {Object}  x The object to test against
 * @return {Boolean}   Returns boolean based on the check
 */
export const isFunction = x => Object.prototype.toString.call(x) === '[object Function]';

/**
 * Checks if the value is a null value
 * @param  {Object}  x The object to test against
 * @return {Boolean}     Returns a boolean based on the check
 */
export const isNull = x => x === null;

/**
 * Checks if the value is a Number
 * @param  {Number}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
export const isNumber = x => Object.prototype.toString.call(x) === '[object Number]';

/**
 * Checks if the value is a String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
export const isString = x => Object.prototype.toString.call(x) === '[object String]';

/**
 * Checks if the value is a RegExp String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
export const isRegExp = x => Object.prototype.toString.call(x) === '[object RegExp]';

/**
 * Determines if the object has a property
 * @param  {String} prop The prop to look for
 * @param  {Object} obj The Object we are searching
 * @return {Boolean} Returns based on if the prop is found or not
 */
export const has = (prop, obj) => Object.prototype.hasOwnProperty.call(obj, prop);

/**
 * Takes and compares to items
 * @param  {Any} a First item to compare
 * @param  {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 */
export const isEqual = (a, b) => equal(a, b, [], []);

export const isEmpty = x => x !== null && isEqual(x, _empty(x));

/**
 * Remove an item from a certain point in the index
 * @param  {Number} i   The index number to remove from
 * @param  {Array} x The array in question
 * @return {Array}     returns the modified array back
 */
export const removeAtIndex = (i, x) => [...x.slice(0, i), ...x.slice(i + 1)];

/**
 * Add an item to an array within a certain index of the array
 * @param  {Number} i    The index number to add at
 * @param  {Object|Array|Number|String} t What we want to add to our array
 * @param  {Array} x  The array in question
 * @return {Array}      Returns the modified array
 */
export const replaceAtIndex = (i, t, x) => [...x.slice(0, i), t, ...x.slice(i + 1)];

/**
 * Combines objects into a single object
 * @param  {Object} args The object we want to combine
 * @return {Object}      Returns the combined object
 */
export const extend = (...args) => args.reduce((acc, x) => {
  let key = '';

  for (key in x) {
    acc[key] = x[key];
  }

  return acc;
}, {});

/**
 * Clones the object sent in (Hard Clone)
 * @param  {Object} x The object we want to get cloned
 * @return {Object}     Returns the cloned object back
 */
export const deepClone = x => JSON.parse(JSON.stringify(x));

/**
 * Shallow clone an object
 * @param  {Object} x The object that should be cloned
 * @return {Object}     Returns the shallow clone of the object
 */
export const clone = x => {
  if (!isObject(x)) {
    return x;
  }

  return isArray(x) ? x.slice() : extend(x);
};

/**
 * Get the mean of a set of numbers
 * @param  {Number|Array} x An amount of numbers or array of numbers
 * @return {Number}   Returns the mean avg of the numbers
 */
export const mean = (...x) => {
  let l = x.length;
  let t = 0;

  if (l === 1 && isArray(x)) {
    const [y] = x;

    l = y.length;
    t = y.reduce((a, v) => a + v, 0);
  } else {
    t = x.reduce((a, v) => a + v, 0);
  }

  return t / l;
};

/**
 * Create an array range from start to end
 * @param  {Number} from Starting number for the range
 * @param  {Number} to   Number to end on for the range
 * @return {Array}      Returns an array of numbers consisting of the range
 */
export const range = (from, to) => {
  const r = [];
  let t = to;
  let n = from;

  if (!to) {
    n = 0;
    t = from;
  }

  while (n < t) {
    r.push(n);
    n += 1;
  }

  return r;
};

/**
 * Returns the nth element of the given list or string.
 * @param  {Number} o How much to offset the value
 * @param  {String|Array} x   The Array or list to crawl through
 * @return {String|Number}        Returns the value of the found index
 */
export const nth = (o, x) => {
  const idx = o < 0 ? x.length + o : o;

  return isString(x) ? x.charAt(idx) : x[idx];
};

/**
 * Grabs the last index of an array
 * @return {Any} Returns whatever was the last piece of our array
 */
export const last = x => nth(-1, x);

/**
 * Returns boolean based on if the value is not
 * @param  {Boolean} x The values to compare against
 * @return {Boolean}   Returns boolean back based on the results
 */
export const not = x => !x;

/**
 * Empties out the items of the sent value
 * @param  {*} x The item to empty
 * @return {*} Returns the empty item
 */
export const empty = x => _empty(x);

/**
 * Finds the type of the sent value
 * @param  {Any} x The value to test
 * @return {String}   Returns the string of the value type
 */
export const type = x => {
  if (isNull(x)) {
    return 'Null';
  }
  if (x === undefined) { // eslint-disable-line no-undefined
    return 'Undefined';
  }

  return Object.prototype.toString.call(x).slice(8, -1);
};

/**
 * Performs a check to see if the items are EXACTLY identical
 * @param  {Any} a The first value to compare
 * @param  {Any} b The second value to compare
 * @return {Boolean}   Returns a boolean based on the check
 */
export const identical = (a, b) => {
  if (a === b) {
    // +0 !== -0
    return a !== 0 || 1 / a === 1 / b;
  }

  // NaN === NaN
  return a !== a && b !== b; // eslint-disable-line no-self-compare
};

/**
 * Placeholder value, used to set placeholder in arguments
 * @type {Object}
 */
export const __ = {'@@functional/placeholder': true}; // eslint-disable-line no-underscore-dangle

/**
 * Find an item based on the function sent in and its list
 * @param  {Function} f The function used/called during the find
 * @param  {Object} x The list we want to search through
 * @return {Any} Returns either the found item, or false if nothing is found
 */
export const find = (f, x) => {
  if (isObject(x)) {
    return findKeys(f, x);
  }

  return findIndex(f, x);
};

/**
 * Create a new Array/Object by omitting the requested values
 * @param  {String} key The key(s) in which to omit from the data
 * @param  {Object} x The array or object to search through
 * @return {Object} Returns the newly created data without the omitted values
 */
export const omit = (key, x) => {
  if (Array.isArray(x)) {
    return x.filter(val => {
      if (Array.isArray(key)) {
        return key.indexOf(val) === -1;
      }

      return key !== val;
    });
  }

  const keys = Object.keys(x);

  return keys.reduce((acc, prop) => {
    if (Array.isArray(key) && key.indexOf(prop) === -1) {
      acc[prop] = x[prop];

      return acc;
    }

    if (!Array.isArray(key) && key !== prop) {
      acc[prop] = x[prop];
    }

    return acc;
  }, {});
};
