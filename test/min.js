import min from '../src/min'
import test from 'ava'

test('Returns min for numbers', t => {
  t.is(min([1, 3, 2, 5, 4]), 1)
})

test('Returns min for string numbers', t => {
  t.is(min(['1', '3', '2', '5', '4']), '1')
})

test('Returns min for letter strings', t => {
  t.is(min(['c', 'a', 'b', 'f']), 'a')
})

test('Returns the min of a date list', t => {
  const d1 = new Date('2018-01-01')
  const d2 = new Date('2018-02-01')

  t.is(min([d1, d2]), d1)
  t.is(min([d2, d1]), d1)
})
