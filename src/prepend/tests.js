import prepend from './index';
import test from 'ava';

test('Test prepend functionality', t => {
  t.deepEqual(prepend('testing', ['is', 'cool']), ['testing', 'is', 'cool']);
});

test('Test curried prepend', t => {
  const pender = prepend('testing');

  t.deepEqual(pender(['is', 'cool']), ['testing', 'is', 'cool']);
});
