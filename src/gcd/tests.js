import gcd from './index';
import test from 'ava';

test('Returns the gcd of two numbers', t => {
  t.is(gcd(80, 90), 10);
});

test('Is curried', t => {
  const x = gcd(80);

  t.is(x(90), 10);
});
