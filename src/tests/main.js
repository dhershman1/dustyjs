import * as dustyjs from '../dusty.js';
import test from 'tape';

test('Test isArray()', t => {
	const results = dustyjs.isArray(['test']);

	console.log(results);
	t.ok(results, 'Results returned');
	t.end();
});
