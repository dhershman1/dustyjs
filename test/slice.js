import slice from '../src/slice'
import test from 'ava'

test('Handles basic array', t => {
  t.deepEqual(slice(1, 3, [1, 2, 3, 4, 5]), [2, 3])
})

test('Is curried', t => {
  const slicer = slice(1, 3)

  t.deepEqual(slicer([1, 2, 3, 4, 5]), [2, 3])
})
