import lte from '../src/lte'
import test from 'ava'

test('Value is greater than', t => {
  t.true(lte(1, 2))
})

test('Value is equal to', t => {
  t.true(lte(2, 2))
})

test('Value is not greater than or equal to', t => {
  t.false(lte(2, 1))
})

test('Is curried', t => {
  const g = lte(2)

  t.true(g(2))
  t.true(g(3))
})
