import * as dustyjs from '../dusty.js';
import test from 'tape';

test('Test isArray()', t => {
	const results = dustyjs.isArray(['test']);

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isObject()', t => {
	const results = dustyjs.isObject({cool: 'test'});

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isFunction()', t => {
	const results = dustyjs.isFunction(function () { return true;});

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isNull()', t => {
	const results = dustyjs.isNull(null);

	t.ok(results, 'Results returned');
	t.end();
});

test('Test isNumber()', t => {
	const results = dustyjs.isNumber(1);

	t.ok(results, 'Results returned');
	t.end();
});
