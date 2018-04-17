import mul from '../src/mul';
import test from 'ava';

test('Multiplies numbers', t => {
  t.is(mul(5, 5), 25);
});

test('Converts string and multiplies anyway', t => {
  t.is(mul(1, '2'), 2);
});

test('Converts number to negative if a passed value is negative', t => {
  t.is(mul(3, -1), -3);
});

test('Is curried', t => {
  const multiply = mul(5);

  t.is(multiply(3), 15);
  t.is(multiply('4'), 20);
});
