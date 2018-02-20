import prepend from './index';
import test from 'ava';

test('Returns array with added element at start', t => {
  t.deepEqual(prepend('testing', ['is', 'cool']), ['testing', 'is', 'cool']);
});

test('Works with empty arrays', t => {
  t.deepEqual(prepend(1, []), [1]);
});

test('Is curried', t => {
  const pender = prepend('testing');

  t.is(typeof pender, 'function');
  t.deepEqual(pender(['is', 'cool']), ['testing', 'is', 'cool']);
});
