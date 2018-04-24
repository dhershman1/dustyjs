import isNil from '../src/isNil'
import test from 'ava'

/* eslint-disable prefer-arrow-callback, no-empty-function, func-names, no-undefined */

test('Basic functionality', t => {
  t.true(isNil(null), 'null results returned true')
})

test('Returns true for undefined', t => {
  t.true(isNil(undefined))
})

test('Returns false for actual values', t => {
  t.false(isNil([]))
})
