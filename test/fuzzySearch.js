import fuzzySearch from '../src/fuzzySearch/index';
import test from 'ava';

test('Basic Functionality', t => {
  t.truthy(fuzzySearch);
  t.truthy(fuzzySearch('cartwheel', 'twl'));
  t.falsy(fuzzySearch('testing', 'dog'));
  t.truthy(fuzzySearch('cast', 'ca'));
});

test('Test curried functionality', t => {
  const searcher = fuzzySearch('cartwheel');

  t.truthy(searcher('twl'));
  t.falsy(searcher('dog'));
  t.truthy(searcher('cat'));
});
