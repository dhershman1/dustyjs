import concatMap from '../src/concatMap'
import test from 'ava'

test('Apples function to values and merges arrays', t => {
  const result = concatMap(x => [x, x], [1, 2, 3])

  t.deepEqual(result, [1, 1, 2, 2, 3, 3])
})

test('Is properly curried', t => {
  const con = concatMap(x => [x, x])

  t.deepEqual(con([1, 2, 3]), [1, 1, 2, 2, 3, 3])
})
