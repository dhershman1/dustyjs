import last from './index';
import test from 'ava';

test('test last() functionality', t => {
  const list = [1, 2, 3, 4];

  t.is(last(list), 4);

  const str = 'abcd';

  t.is(last(str), 'd');
});