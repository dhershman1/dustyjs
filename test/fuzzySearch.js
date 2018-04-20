import fuzzySearch from '../src/fuzzySearch';
import test from 'ava';

test('Basic Functionality', t => {
  t.truthy(fuzzySearch);
  t.truthy(fuzzySearch('cartwheel', 'twl'));
  t.falsy(fuzzySearch('testing', 'dog'));
  t.truthy(fuzzySearch('cast', 'ca'));
});

test('Little more advanced search', t => {
  t.true(fuzzySearch('curry', 'cu'));
  t.true(fuzzySearch('curryN', 'cu'));
});

test('search with cu for chuck', t => {
  t.true(fuzzySearch('chuck', 'cu'));
});

test('Test curried functionality', t => {
  const searcher = fuzzySearch('cartwheel');

  t.truthy(searcher('twl'));
  t.falsy(searcher('dog'));
  t.truthy(searcher('cat'));
});
