import fuzzySearch from './index';
import test from 'ava';

test('Basic Functionality', t => {
  t.truthy(fuzzySearch);
  t.truthy(fuzzySearch('cartwheel', 'twl'));
});
