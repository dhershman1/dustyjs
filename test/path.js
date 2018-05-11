import path from '../src/path'
import test from 'ava'

test('Returns back value when found', t => {
  const result = path(['a', 'b'], { a: { b: 2 } })

  t.is(result, 2, 'Found the value of 2 from the object')
})

test('Safely Navigates bad objects', t => {
  const result = path(['a', 'b', 'c'], { a: 2 })

  t.falsy(result, 'Returns a falsy value for bad objects')
})

test('Navigates tricky broken objects', t => {
  const result = path(['a', 'b', 'c'], { a: { c: { b: 4 } } })

  t.falsy(result, 'Correctly did not find the value with the given path')
})
