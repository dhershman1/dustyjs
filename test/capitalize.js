import capitalize from '../src/capitalize'
import test from 'ava'

test('Capitalizes first letter of string', t => {
  t.is(capitalize('test'), 'Test')
})

test('Capitalizes multi word strings', t => {
  t.is(capitalize('small brown cow'), 'Small brown cow')
})

test('Handles empty strings', t => {
  t.is(capitalize(''), '')
})
