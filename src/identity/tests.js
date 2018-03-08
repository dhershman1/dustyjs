import filter from '../filter';
import identity from './index';
import test from 'ava';

test('Returns value given to it', t => {
  t.is(identity(10), 10);
});

test('Handles being used as a function callback', t => {
  t.deepEqual(filter(identity, [0, 'cool', null, 1]), ['cool', 1]);
});
