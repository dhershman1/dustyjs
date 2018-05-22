import test from 'ava'
import uniq from '../src/uniq'

test('Removes duplicates', t => {
  t.deepEqual(uniq([1, 2, 2, 3, 3, 4, 5]), [1, 2, 3, 4, 5])
})

test('Removes duplicate strings', t => {
  t.deepEqual(uniq(['test', 'test', 'thing', 'other', 'other']), ['test', 'thing', 'other'])
})
