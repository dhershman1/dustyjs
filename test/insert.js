import insert from '../src/insert'
import test from 'ava'

test('Inserts the desired value into the array', t => {
  const results = insert(2, 'x', [1, 2, 3, 4])

  t.deepEqual(results, [1, 2, 'x', 3, 4])
})

test('Is curried', t => {
  const ins = insert(2, 'x')

  t.deepEqual(ins([1, 2, 3, 4]), [1, 2, 'x', 3, 4])
})
