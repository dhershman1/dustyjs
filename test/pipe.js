import add from '../src/add'
import mul from '../src/mul'
import pipe from '../src/pipe'
import test from 'ava'

test('Returns value after running pipe', t => {
  t.is(pipe([add(2), mul(2)], 10), 24)
})

test('Is curried', t => {
  const piper = pipe([add(2), mul(2)])

  t.is(piper(10), 24)
})
