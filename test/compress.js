import compress from '../src/compress'
import test from 'ava'

/* eslint-disable no-undefined */

test('Removes undefined values', t => {
  const results = compress({
    test: undefined,
    cool: 'thing',
    not: 'removed'
  })

  t.is(results.test, undefined)
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
})

test('Removes null values', t => {
  const results = compress({
    test: null,
    cool: 'thing',
    not: 'removed'
  })

  t.is(results.test, undefined)
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
})

test('Skips falsy value like empty string', t => {
  const results = compress({
    test: '',
    cool: 'thing',
    not: 'removed'
  })

  t.is(results.test, '')
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
})

test('Skips falsy value like a number zero', t => {
  const results = compress({
    test: 0,
    cool: 'thing',
    not: 'removed'
  })

  t.is(results.test, 0)
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
})
