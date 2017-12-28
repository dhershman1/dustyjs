import isPlaceholder from './index';
import test from 'ava';

test('Test placeholder functionality', t => {
  t.truthy(isPlaceholder({
    '@@functional/placeholder': true
  }));
  t.falsy(isPlaceholder({}));
});
