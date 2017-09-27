const test = require('tape');
const {curry} = require('../../dist/dustyjs.umd.js');

test('Basic Curry test', t => {
	const add = curry((a, b, c) => a + b + c);
	const results = add(2)(4)(10);

	t.ok(results, 'Results came by');
	t.equal(results, 16, 'Results are equal to 16');
	t.equal(typeof results, 'number', 'Result is a number');
	t.end();
});
