import removeAt from '../src/removeAt'
import test from 'ava'

test('Removes from appointed index', t => {
  const result = removeAt(2, [0, 1, 2, 3])

  t.deepEqual(result, [0, 1, 3])
})

test('Can handle string based arrays', t => {
  t.deepEqual(removeAt(1, ['foo', 'bar']), ['foo'])
})

test('Is curried', t => {
  const remover = removeAt(2)
  const result = remover([1, 2, 3, 4])

  t.deepEqual(result, [1, 2, 4])
})
