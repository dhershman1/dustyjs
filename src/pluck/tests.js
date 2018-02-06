import pluck from './index';
import test from 'ava';

test('Basic functionality', t => {
  t.deepEqual(pluck(0, [[1, 2], [3, 4]]), [1, 3]);
  t.deepEqual(pluck('a', [{ a: 1 }]), [1]);
});
