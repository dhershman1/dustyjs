const test = require('tape');
const {isEqual} = require('../../dist/dustyjs.umd.js');

test('Test isEqual() primatives', t => {
	const a = [];
	const b = a;

	t.ok(isEqual(100, 100), 'number 100 equals number 100');
	t.notOk(isEqual(100, '100'), 'number 100 is not equal to string 100');
	t.ok(isEqual([], []), '2 empty arrays are equal');
	t.ok(isEqual(a, b), 'variable b is equal to a');
	t.ok(isEqual('test', 'test'), 'strings are equal');
	t.end();
});

test('Test primitive booleans', t => {
	t.ok(isEqual(true, true), 'simple booleans true, true are equal');
	t.ok(isEqual(false, false), 'simple booleans false, false are equal');
	t.notOk(isEqual(true, false), 'simple booleans true, false are not equal');
	t.notOk(isEqual(false, true), 'simple booleans false, true are not equal');
	t.end();
});

test('Test Boolean Objects', t => {
	t.ok(isEqual(new Boolean(true), new Boolean(true)), 'Object true and object true are equal');
	t.ok(isEqual(new Boolean(false), new Boolean(false)), 'Object false and object false are equal');
	t.notOk(isEqual(new Boolean(false), new Boolean(true)), 'Object false and object true are not equal');
	t.notOk(isEqual(new Boolean(true), new Boolean(false)), 'Object true and object false are not equal');
	t.end();
});

test('Test boolean primitive do not equal boolean objects', t => {
	t.notOk(isEqual(true, new Boolean(true)), 'true is not equal to object true');
	t.notOk(isEqual(false, new Boolean(false)), 'flase is not equal to object false');
	t.end();
});

test('Test can handle objects', t => {
	t.ok(isEqual({}, {}), 'empty object is equal to empty object');
	t.ok(isEqual({a: 1, b: 2}, {a: 1, b: 2}), 'simple object is equal to simple object');
	t.notOk(isEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2}), 'the two provided objects are not equal');
	t.end();
});

test('Test arguments objects', t => {
	const a = (function(...args) { return args; }());
	const b = (function(...args) { return args; }());
	const c = (function(...args) { return args; }('a', 'b', 'c'));
	const d = (function(...args) { return args; }('a', 'b', 'c'));

	t.ok(isEqual(a, b), 'no args is equal');
	t.ok(isEqual(c, d), '3 args is equal');
	t.notOk(isEqual(a, c), 'no args isnt equal to 3 args');
	t.end();
});

test('Test error objects are equal', t => {
	t.ok(isEqual(new Error('Test'), new Error('Test')), 'Test error is equal');
	t.ok(isEqual(new TypeError('Test'), new TypeError('Test')), 'Test type error is equal');
	t.notOk(isEqual(new Error('Test'), new TypeError('Test')), 'Test type error is not equal to regular error');
	t.end();
});

test('Test handles regex', t => {
	t.ok(isEqual(/\s/, /\s/), 'handles whitespace regex');
	t.ok(isEqual(/a/gi, /a/gi), 'handles flags');
	t.notOk(isEqual(/\s/, /\d/), 'whitespace regex is not equal to digit regex');
	t.ok(isEqual(/a/mgi, /a/img), 'handles mixed flags');
	t.notOk(isEqual(/a/gi, /a/i), 'Handles not equal flags');
	t.end();
});
