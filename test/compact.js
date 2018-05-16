import compact from '../src/compact'
import test from 'ava'

test('Removes falsy values', t => {
  const results = compact([1, '', 0, 2])

  t.deepEqual(results, [1, 2])
})

test('Removes fully false values', t => {
  const results = compact([1, '', false, 2, undefined, 3, null])

  t.deepEqual(results, [1, 2, 3])
})
