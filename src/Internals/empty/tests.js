import empty from './index';
import test from 'ava';

test('Empty String', t => {
	const results = empty('Sweet little fox');

	t.is(results, '', 'The string is empty');
});

test('Return 0 for a null value', t => {
	const results = empty(null);

	t.is(results, 0, 'The results came back as 0');
});

test('Empty an array', t => {
	const results = empty([1, 2, 3]);

	t.is(results.length, 0, 'Array is empty');
	t.truthy(Array.isArray(results), 'Array is still an array');
});

test('Empty an object', t => {
	const results = empty({
		test: 'an object',
		inner: {
			innerTest: 'this objects inner'
		}
	});

	t.truthy(results, 'Got back results');
	t.deepEqual(results, {}, 'Results are an empty object');
});
