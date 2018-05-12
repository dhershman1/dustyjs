import plan from '../src/plan'
import test from 'ava'

const testFns = {
  a: x => x * 2,
  b: x => x + 10
}

test('Applies the schema functions accordingly', t => {
  const results = plan(testFns, {
    a: 2,
    b: 15
  })

  t.deepEqual(results, { a: 4, b: 25 })
})

test('Is curried', t => {
  const p = plan(testFns)
  const results = p({ a: 5, b: 10 })

  t.deepEqual(results, { a: 10, b: 20 })
})

test('Handles missing properties', t => {
  const results = plan(testFns, { a: 5 })

  t.deepEqual(results, { a: 10 })
})
