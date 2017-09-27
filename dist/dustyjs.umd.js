(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.DustyJS = {})));
}(this, (function (exports) { 'use strict';

var _empty = x => { // eslint-disable-line complexity
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
			
		}
	}

	return 0;
};

var arrayFromIterator = iter => {
	const list = [];
	let next = '';

	while (!(next = iter.next()).done) {
		list.push(next.value);
	}

	return list;
};

var functionName = f => {
	const match = String(f).match(/^function (\w*)/);

	return match == null ? '' : match[1]; // eslint-disable-line
};

const nullTypeCheck = (a, b) => a === null || b === null || type(a) !== type(b);

const equal = (a, b, stackA, stackB) => { // eslint-disable-line
	if (identical(a, b)) {
		return true;
	}

	if (nullTypeCheck(a, b)) {
		return false;
	}

	switch (type(a)) {
		case 'Arguments':
		case 'Array':
		case 'Object':
			if (typeof a.constructor === 'function' &&
				functionName(a.constructor) === 'Promise') {

				return a === b;
			}
			break;
		case 'Boolean':
		case 'Number':
		case 'String':
			if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
				return false;
			}
			break;
		case 'Date':
			if (!identical(a.valueOf(), b.valueOf())) {
				return false;
			}
			break;
		case 'Error':
			return a.name === b.name && a.message === b.message;
		case 'RegExp':
			if (!(a.source === b.source &&
						a.global === b.global &&
						a.ignoreCase === b.ignoreCase &&
						a.multiline === b.multiline &&
						a.sticky === b.sticky &&
						a.unicode === b.unicode)) {
				return false;
			}
			break;
		case 'Map':
		case 'Set':
			if (!equal(arrayFromIterator(a.entries()), arrayFromIterator(b.entries()), stackA, stackB)) {
				return false;
			}
			break;
		case 'Int8Array':
		case 'Uint8Array':
		case 'Uint8ClampedArray':
		case 'Int16Array':
		case 'Uint16Array':
		case 'Int32Array':
		case 'Uint32Array':
		case 'Float32Array':
		case 'Float64Array':
			break;
		case 'ArrayBuffer':
			break;
		default:
			return false;
	}

	const keysA = Object.keys(a);

	if (keysA.length !== Object.keys(b).length) {
		return false;
	}

	let idx = stackA.length - 1;

	while (idx >= 0) {
		if (stackA[idx] === a) {
			return stackB[idx] === b;
		}
		idx -= 1;
	}

	stackA.push(a);
	stackB.push(b);
	idx = keysA.length - 1;

	while (idx >= 0) {
		const key = keysA[idx];

		if (!(has(key, b) && equal(b[key], a[key], stackA, stackB))) {
			return false;
		}
		idx -= 1;
	}
	stackA.pop();
	stackB.pop();

	return true;
};

// import _curry from './internals/curry';
// export const curry = (length, fn) => _curry(length, [], fn);

const curry = (f, ...args) => (f.length <= args.length) ? f(...args) : (...more) => curry(f, ...args, ...more);

/**
 * Verifies if the value is of type array
 * @param  {Array} x The value to check
 * @return {Boolean}   Returns the boolean depending on the result
 */
const isArray = Array.isArray || function isArray(x) {
	return Object.prototype.toString.call(x) === '[object Array]';
};

/**
 * Verifies the item is an object
 * @param  {Object}  x The item to verify
 * @return {Boolean}     Returns true or false if the item is an object
 */
const isObject = x => Object.prototype.toString.call(x) === '[object Object]';

/**
 * Determines if the value is a function
 * @param  {Object}  x The object to test against
 * @return {Boolean}   Returns boolean based on the check
 */
const isFunction = x => Object.prototype.toString.call(x) === '[object Function]';

/**
 * Determine if the value is part of an argument type or not
 * @param  {Argument}  x The value to run our check against
 * @return {Boolean}   Returns a boolean based on our check
 */
const isArguments = x => Object.prototype.toString.call(x) === '[object Arguments]';

/**
 * Checks if the value is a null value
 * @param  {Object}  x The object to test against
 * @return {Boolean}     Returns a boolean based on the check
 */
const isNull = x => x === null;

/**
 * Verifies the sent in value is an element
 * @param  {Object}  x The Item to Verify
 * @return {Boolean}      Returns true or false depending on if the value is an element
 */
const isElement = x => Boolean(x && x.nodeType === 1);

/**
 * Checks if the value is a Number
 * @param  {Number}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
const isNumber = x => Object.prototype.toString.call(x) === '[object Number]';

/**
 * Checks if the value is a String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
const isString = x => Object.prototype.toString.call(x) === '[object String]';

/**
 * Checks if the value is a RegExp String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */
const isRegExp = x => Object.prototype.toString.call(x) === '[object RegExp]';

/**
 * Determines if the object has a property
 * @param  {String} prop The prop to look for
 * @param  {Object} obj The Object we are searching
 * @return {Boolean} Returns based on if the prop is found or not
 */
const has = (prop, obj) => Object.prototype.hasOwnProperty.call(obj, prop);

/**
 * Takes and compares to items
 * @param  {Any} a First item to compare
 * @param  {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 */
const isEqual = (a, b) => equal(a, b, [], []);

/**
 * Remove an item from a certain point in the index
 * @param  {Number} i   The index number to remove from
 * @param  {Array} x The array in question
 * @return {Array}     returns the modified array back
 */
const removeAtIndex = (i, x) => [...x.slice(0, i), ...x.slice(i + 1)];

/**
 * Add an item to an array within a certain index of the array
 * @param  {Number} i    The index number to add at
 * @param  {Object|Array|Number|String} t What we want to add to our array
 * @param  {Array} x  The array in question
 * @return {Array}      Returns the modified array
 */
const appendAtIndex = (i, t, x) => [...x.slice(0, i), t, ...x.slice(i + 1)];

/**
 * Combines objects into a single object
 * @param  {Object} args The object we want to combine
 * @return {Object}      Returns the combined object
 */
const extend = (...args) => args.reduce((acc, x) => {
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
const deepClone = x => JSON.parse(JSON.stringify(x));

/**
 * Shallow clone an object
 * @param  {Object} x The object that should be cloned
 * @return {Object}     Returns the shallow clone of the object
 */
const clone = x => {
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
const mean = (...x) => {
	const l = x.length;
	const t = x.reduce((a, v) => a + v);

	return t / l;
};

/**
 * Create an array range from start to end
 * @param  {Number} from Starting number for the range
 * @param  {Number} to   Number to end on for the range
 * @return {Array}      Returns an array of numbers consisting of the range
 */
const range = (from, to) => {
	if (!isNumber(from) && !isNumber(to)) {
		throw new TypeError('Both arguments to range must be numbers');
	}
	const result = [];
	let n = from;

	while (n < to) {
		result.push(n);
		n += 1;
	}

	return result;
};

/**
 * Returns the nth element of the given list or string.
 * @param  {Number} offset How much to offset the value
 * @param  {String|Array} list   The Array or list to crawl through
 * @return {String|Number}        Returns the value of the found index
 */
const nth = (offset, list) => {
	const idx = offset < 0 ? list.length + offset : offset;

	return isString(list) ? list.charAt(idx) : list[idx];
};

/**
 * Grabs the last index of an array
 * @return {Any} Returns whatever was the last piece of our array
 */
const last = x => nth(-1, x);

/**
 * Returns boolean based on if the value is not
 * @param  {Boolean} x The values to compare against
 * @return {Boolean}   Returns boolean back based on the results
 */
const not = x => !x;

/**
 * Empties out the items of the sent value
 * @param  {*} x The item to empty
 * @return {*} Returns the empty item
 */
const empty = x => _empty(x);

/**
 * Finds the type of the sent value
 * @param  {Any} x The value to test
 * @return {String}   Returns the string of the value type
 */
const type = x => {
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
const identical = (a, b) => {
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
const d__ = {'@@functional/placeholder': true}; // eslint-disable-line no-underscore-dangle

exports.curry = curry;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isArguments = isArguments;
exports.isNull = isNull;
exports.isElement = isElement;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isRegExp = isRegExp;
exports.has = has;
exports.isEqual = isEqual;
exports.removeAtIndex = removeAtIndex;
exports.appendAtIndex = appendAtIndex;
exports.extend = extend;
exports.deepClone = deepClone;
exports.clone = clone;
exports.mean = mean;
exports.range = range;
exports.nth = nth;
exports.last = last;
exports.not = not;
exports.empty = empty;
exports.type = type;
exports.identical = identical;
exports.d__ = d__;

Object.defineProperty(exports, '__esModule', { value: true });

})));
