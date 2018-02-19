import any from './';
import test from 'ava';

test('Basic functionality', t => {
  const runner = x => typeof x === 'string';

  t.truthy(any(runner, ['foo', 'bar']));
  t.truthy(any(runner, ['foo', 'bar', 1]));
  t.falsy(any(runner, [1, 2, 3]));
});

test('Basic curried functionality', t => {
  const a = any(x => typeof x === 'string');

  t.truthy(a(['foo', 'bar']));
  t.truthy(a(['foo', 'bar', 1]));
  t.falsy(a([1, 2, 3]));
});

test('Run against objects', t => {
  const runner = ({ val }) => val === 'test';

  t.truthy(any(runner, [{ val: 'thing' }, { val: 'test' }]));
  t.falsy(any(runner, [{ val: 'thing' }, { val: 100 }]));
});
