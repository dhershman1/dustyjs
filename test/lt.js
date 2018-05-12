import lt from '../src/lt'
import test from 'ava'

test('Determines if the numbers are lt', t => {
  t.true(lt(1, 2))
})

test('Determines if the letters are lt', t => {
  t.true(lt('a', 'b'))
})

test('It is curried', t => {
  const g = lt(1)

  t.true(g(2))
})

test('Compares equal values', t => {
  t.false(lt(1, 1))
})
