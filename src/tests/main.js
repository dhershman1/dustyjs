const test = require('tape');
const dustyjs = require('../../dist/dustyjs.umd.js');

test('Test isArray()', t => {
	t.ok(dustyjs.isArray(['test']), 'Results returned true');
	t.notOk(dustyjs.isArray({cool: 'test'}), 'Results returned false');
	t.end();
});

test('Test isObject()', t => {

	t.ok(dustyjs.isObject({cool: 'test'}), 'Results returned true');
	t.notOk(dustyjs.isObject(['test']), 'Results returned false');
	t.end();
});

test('Test isFunction()', t => {

	t.ok(dustyjs.isFunction(function () {
		return true;
	}), 'Results returned true');
	t.notOk(dustyjs.isFunction('Test'), 'Results returned false');
	t.end();
});

test('Test isNull()', t => {
	t.ok(dustyjs.isNull(null), 'null results returned true');
	t.notOk(dustyjs.isNull(undefined), 'undefined results returned false');
	t.notOk(dustyjs.isNull([]), 'empty array results returned false');
	t.end();
});

test('Test isNumber()', t => {
	t.ok(dustyjs.isNumber(1), 'Results returned true');
	t.notOk(dustyjs.isNumber('1'), 'Results returned false');
	t.end();
});

test('Test isString()', t => {
	t.notOk(dustyjs.isString(1), 'Results returned false');
	t.ok(dustyjs.isString('1'), 'Results returned true');
	t.end();
});

test('Test isEqual()', t => {
	const a = [];
	const b = a;

	t.ok(dustyjs.isEqual(100, 100), 'number 100 equals number 100');
	t.notOk(dustyjs.isEqual(100, '100'), 'number 100 is not equal to string 100');
	t.ok(dustyjs.isEqual([], []), '2 empty arrays are equal');
	t.ok(dustyjs.isEqual(a, b), 'variable b is equal to a');
	t.end();
});
