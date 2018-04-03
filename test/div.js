import div from '../src/div/index';
import test from 'ava';

test('Divides the numbers', t => {
  t.is(div(5, 5), 1);
});

test('Converts string and multiplies anyway', t => {
  t.is(div(1, '2'), 0.5);
});

test('Converts number to negative if a passed value is negative', t => {
  t.is(div(3, -1), -3);
});

test('Is curried', t => {
  const divide = div(15);

  t.is(divide(3), 5);
  t.is(divide('5'), 3);
});
