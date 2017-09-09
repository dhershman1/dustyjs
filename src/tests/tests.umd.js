(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('src/internals/equal.js'), require('tape')) :
	typeof define === 'function' && define.amd ? define(['src/internals/equal.js', 'tape'], factory) :
	(factory(global.equal,global.test));
}(this, (function (equal,test) { 'use strict';

equal = equal && equal.hasOwnProperty('default') ? equal['default'] : equal;
test = test && test.hasOwnProperty('default') ? test['default'] : test;

/*
 * A simple utility library for anti-mutation data setup
 */

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


/**
 * Checks if the value is a RegExp String
 * @param  {String}  x The value to check
 * @return {Boolean}   Returns the boolean after testing our value
 */


/**
 * Takes and compares to items
 * @param  {Any} a First item to compare
 * @param  {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 */


/**
 * Remove an item from a certain point in the index
 * @param  {Number} i   The index number to remove from
 * @param  {Array} x The array in question
 * @return {Array}     returns the modified array back
 */


/**
 * Add an item to an array within a certain index of the array
 * @param  {Number} i    The index number to add at
 * @param  {Object|Array|Number|String} t What we want to add to our array
 * @param  {Array} x  The array in question
 * @return {Array}      Returns the modified array
 */


/**
 * Combines objects into a single object
 * @param  {Object} args The object we want to combine
 * @return {Object}      Returns the combined object
 */


/**
 * Generates a random number based on the max sent in
 * @param  {Number} x The max our random number can go to
 * @return {Number}     Returns the random number
 */


/**
 * Clones the object sent in (Hard Clone)
 * @param  {Object} x The object we want to get cloned
 * @return {Object}     Returns the cloned object back
 */


/**
 * Shallow clone an object
 * @param  {Object} x The object that should be cloned
 * @return {Object}     Returns the shallow clone of the object
 */


/**
 * Get the mean of a set of numbers
 * @param  {Number|Array} x An amount of numbers or array of numbers
 * @return {Number}   Returns the mean avg of the numbers
 */


/**
 * Create an array range from start to end
 * @param  {Number} from Starting number for the range
 * @param  {Number} to   Number to end on for the range
 * @return {Array}      Returns an array of numbers consisting of the range
 */


/**
 * Returns the nth element of the given list or string.
 * @param  {Number} offset How much to offset the value
 * @param  {String|Array} list   The Array or list to crawl through
 * @return {String|Number}        Returns the value of the found index
 */


/**
 * Grabs the last index of an array
 * @return {Any} Returns whatever was the last piece of our array
 */


/**
 * Returns boolean based on if the value is not
 * @param  {Boolean} x The values to compare against
 * @return {Boolean}   Returns boolean back based on the results
 */




/**
 * Finds the type of the sent value
 * @param  {Any} x The value to test
 * @return {String}   Returns the string of the value type
 */


/**
 * Performs a check to see if the items are EXACTLY identical
 * @param  {Any} a The first value to compare
 * @param  {Any} b The second value to compare
 * @return {Boolean}   Returns a boolean based on the check
 */

test('Test isArray()', t => {
	const results = isArray(['test']);

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isObject()', t => {
	const results = isObject({cool: 'test'});

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isFunction()', t => {
	const results = isFunction(function () { return true;});

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isNull()', t => {
	const results = isNull(null);

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isNumber()', t => {
	const results = isNumber(1);

	t.ok(results, 'Results returned');
	t.end();
});

})));
