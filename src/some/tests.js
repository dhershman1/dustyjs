import some from './';
import test from 'ava';

test('Basic functionality', t => {
  const runner = x => typeof x === 'string';

  t.truthy(some(runner, ['foo', 'bar']));
  t.truthy(some(runner, ['foo', 'bar', 1]));
  t.falsy(some(runner, [1, 2, 3]));
});

test('Basic curried functionality', t => {
  const a = some(x => typeof x === 'string');

  t.truthy(a(['foo', 'bar']));
  t.truthy(a(['foo', 'bar', 1]));
  t.falsy(a([1, 2, 3]));
});

test('Run against objects', t => {
  const runner = ({ val }) => val === 'test';

  t.truthy(some(runner, [{ val: 'thing' }, { val: 'test' }]));
  t.falsy(some(runner, [{ val: 'thing' }, { val: 100 }]));
});
