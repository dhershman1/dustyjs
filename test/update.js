import update from '../src/update'
import test from 'ava'

test('updates value at index', t => {
  const result = update(2, 10, [0, 1, 2, 3])

  t.deepEqual(result, [0, 1, 10, 3])
})

test('Handles string based arrays', t => {
  t.deepEqual(update(1, 'haha', ['foo', 'bar', 'bax']), ['foo', 'haha', 'bax'])
})

test('It only updates the index it was told', t => {
  t.deepEqual(update(1, 10, [0, 1, 1, 2, 2, 3]), [0, 10, 1, 2, 2, 3])
})

test('Is curried', t => {
  t.deepEqual(update(2)(10)([0, 1, 2, 3]), [0, 1, 10, 3])
})
