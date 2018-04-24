import assign from '../src/assign'
import test from 'ava'

test('Handle single level object', t => {
  t.deepEqual(assign({ a: 1 }), { a: 1 })
})

test('Test base functionality', t => {
  const compare = {
    test: 1,
    again: 2
  }
  const result = assign({ test: 1 }, { again: 2 })

  t.deepEqual(compare, result)
})

test('Overwrite matching properties', t => {
  const results = assign({
    a: 1,
    b: 2,
    c: 3
  }, {
    c: 5,
    d: 3
  })

  t.deepEqual(results, {
    a: 1,
    b: 2,
    c: 5,
    d: 3
  })
})

test('Test with more complex objects', t => {
  const compare = {
    test: 1,
    again: 2,
    anotherOne: 3
  }
  const result = assign({ test: 1 }, {
    again: 2,
    anotherOne: 3
  })

  t.deepEqual(compare, result)
})

test('Test with nested objects', t => {
  const compare = {
    test: 1,
    again: 2,
    anotherOne: 3,
    nested: {
      thing: 1,
      forecast: 23
    }
  }
  const result = assign({ test: 1 }, {
    again: 2,
    anotherOne: 3
  }, {
    nested: {
      thing: 1,
      forecast: 23
    }
  })

  t.deepEqual(compare, result)
})

test('Handles any number of objects passed in', t => {
  const results = assign({ a: 1 }, { b: 2 }, { c: 5 }, { c: 3 }, { d: 4 })

  t.deepEqual(results, {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })
})
