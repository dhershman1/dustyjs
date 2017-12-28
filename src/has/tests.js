import has from './index';
import test from 'ava';

test('Test has()', t => {
  t.truthy(has('test', { test: 1 }), 'Has test');
  t.falsy(has('test', { cool: 1 }), 'Does not have test');
});
