import concat from '../src/concat'
import test from 'ava'

test('Merged array of arrays', t => {
  const result = concat([[1, 2], [3, 4], [5, 6]])

  t.deepEqual(result, [1, 2, 3, 4, 5, 6])
})
