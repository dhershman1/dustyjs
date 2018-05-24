import functionName from '../src/_internals/function-name'
import test from 'tape'

test('Test functionality', t => {
  const myFunc = function myFunc () { }

  t.ok(functionName(myFunc))
  t.is(functionName(myFunc), 'myFunc')
  t.end()
})

test('Returns empty string if match is null', t => {
  t.is(functionName(() => { }), '', 'Got back an empty string')
  t.end()
})
