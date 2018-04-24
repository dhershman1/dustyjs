import length from '../src/length'
import test from 'ava'

test('Returns the length', t => {
  t.is(length([1, 2, 3, 4]), 4)
})

test('Returns zero for empty arrays', t => {
  t.is(length([]), 0)
})
