import add from '../src/add'
import test from 'ava'

test('Adds two numbers together', t => {
  t.is(add(1, 2), 3)
})

test('Combines strings instead of adding', t => {
  t.is(add(1, '2'), '12')
})

test('Is curried', t => {
  const adder = add(3)

  t.is(adder(4), 7)
  t.is(adder('4'), '34')
})
