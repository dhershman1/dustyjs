import fuzzySearch from './index';
import test from 'ava';

test('Basic Functionality', t => {
  t.truthy(fuzzySearch);
  t.truthy(fuzzySearch('cartwheel', 'twl'));
  t.falsy(fuzzySearch('testing', 'dog'));
  t.truthy(fuzzySearch('cast', 'ca'));
});
