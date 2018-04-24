import test from 'ava'
import uniq from '../src/uniq'

test('Creates a unique array', t => {
  const results = uniq(x => x.length, ['and', 'here', 'are', 'some', 'words'])

  t.deepEqual(results, ['and', 'here', 'words'])
})

test('Is curried', t => {
  const uq = uniq(x => x.length)

  t.deepEqual(uq(['and', 'here', 'are', 'some', 'words']), ['and', 'here', 'words'])
})
