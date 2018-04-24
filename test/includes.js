import includes from '../src/includes'
import test from 'ava'

test('Returns true for basic strings', t => {
  t.true(includes('cow', 'small brown cow'))
})

test('Works with string templates', t => {
  const x = 'cow'

  t.true(includes('cow', `small brown ${x}`))
})

test('Is Curried', t => {
  const checker = includes('cow')
  const x = 'cow'

  t.true(checker('small brown cow'))
  t.true(checker(`small brown ${x}`))
})
