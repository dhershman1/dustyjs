import gte from '../src/gte'
import test from 'ava'

test('Value is greater than', t => {
  t.true(gte(2, 1))
})

test('Value is equal to', t => {
  t.true(gte(2, 2))
})

test('Value is not greater than or equal to', t => {
  t.false(gte(1, 2))
})

test('Is curried', t => {
  const g = gte(2)

  t.true(g(1))
  t.true(g(2))
})
