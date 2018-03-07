import lcm from './index';
import test from 'ava';

test('Gets the lcm of two numbers', t => {
  t.is(lcm(90, 70), 630);
});

test('Is curried', t => {
  const x = lcm(90);

  t.is(x(4), 180);
});
