const test = require('tape');
const dusty = require('../../dist/dustyjs.umd.js');

test('Test isArray()', t => {
	t.ok(dusty.isArray(['test']), 'Results returned true');
	t.notOk(dusty.isArray({cool: 'test'}), 'Results returned false');
	t.end();
});

test('Test isObject()', t => {

	t.ok(dusty.isObject({cool: 'test'}), 'Results returned true');
	t.notOk(dusty.isObject(['test']), 'Results returned false');
	t.end();
});

test('Test isFunction()', t => {

	t.ok(dusty.isFunction(function () {
		return true;
	}), 'Results returned true');
	t.notOk(dusty.isFunction('Test'), 'Results returned false');
	t.end();
});

test('Test isNull()', t => {
	t.ok(dusty.isNull(null), 'null results returned true');
	t.notOk(dusty.isNull(undefined), 'undefined results returned false');
	t.notOk(dusty.isNull([]), 'empty array results returned false');
	t.end();
});

test('Test isNumber()', t => {
	t.ok(dusty.isNumber(1), 'Results returned true');
	t.notOk(dusty.isNumber('1'), 'Results returned false');
	t.end();
});

test('Test isString()', t => {
	t.notOk(dusty.isString(1), 'Results returned false');
	t.ok(dusty.isString('1'), 'Results returned true');
	t.end();
});
