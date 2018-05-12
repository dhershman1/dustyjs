import height from '../src/height'
import test from 'ava'

test('Basic functionality', t => {
  t.is(height({ a: 1, b: 2 }), 2)
})

test('Ignores nested objects', t => {
  t.is(height({ a: 1, b: { c: 2 } }), 2)
})
