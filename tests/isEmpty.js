import isEmpty from '../src/isEmpty'
import test from 'tape'

test('Returns false when not empty', t => {
  t.false(isEmpty(['']))
  t.end()
})

test('Returns true for empty strings', t => {
  t.true(isEmpty(''))
  t.false(isEmpty(' '))
  t.end()
})

test('Returns true for empty arrays', t => {
  t.true(isEmpty([]))
  t.false(isEmpty([[]]))
  t.end()
})

test('Returns true for empty objects', t => {
  t.true(isEmpty({}))
  t.false(isEmpty({ x: 0 }))
  t.end()
})

test('Returns true for 0 numeric value', t => {
  t.true(isEmpty(0))
  t.end()
})

test('Returns true for NaN values', t => {
  t.true(isEmpty(NaN))
  t.end()
})
