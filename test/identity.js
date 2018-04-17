import filter from '../src/filter';
import identity from '../src/identity';
import test from 'ava';

test('Returns value given to it', t => {
  t.is(identity(10), 10);
});

test('Handles being used as a function callback', t => {
  t.deepEqual(filter(identity, [0, 'cool', null, 1]), ['cool', 1]);
});

test('Returns with ability to access as argument type', t => {
  const results = identity(10);

  t.truthy(results);
  t.is(typeof results.constructor, 'function');
});
