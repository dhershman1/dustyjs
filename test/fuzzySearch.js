import fuzzySearch from '../src/fuzzySearch'
import test from 'ava'

test('Basic Functionality', t => {
  t.truthy(fuzzySearch)
  t.truthy(fuzzySearch('twl', 'cartwheel'))
  t.falsy(fuzzySearch('dog', 'testing'))
  t.truthy(fuzzySearch('ca', 'cast'))
})

test('Little more advanced search', t => {
  t.true(fuzzySearch('cu', 'curry'))
  t.true(fuzzySearch('cu', 'curryN'))
})

test('search with cu for chuck', t => {
  t.true(fuzzySearch('cu', 'chuck'))
})
