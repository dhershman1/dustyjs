const test = require('tape');
const {empty} = require('../../dist/dustyjs.umd.js');

test('Empty String', t => {
	const results = empty('Sweet little fox');

	t.equal(results, '', 'The string is empty');
	t.end();
});

test('Return 0 for a null value', t => {
	const results = empty(null);

	t.equal(results, 0, 'The results came back as 0');
	t.end();
});

test('Empty an array', t => {
	const results = empty([1, 2, 3]);

	t.equal(results.length, 0, 'Array is empty');
	t.ok(Array.isArray(results), 'Array is still an array');
	t.end();
});

test('Empty an object', t => {
	const results = empty({
		test: 'an object',
		inner: {
			innerTest: 'this objects inner'
		}
	});

	t.ok(results, 'Got back results');
	t.deepEqual(results, {}, 'Results are an empty object');
	t.end();
});
