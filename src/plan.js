import assign from './assign'
import curry from './curry'

/**
 * @name plan
 * @since v3.0.0
 * @category Object
 * @sig Object -> Object -> Object
 * @description Uses a schema to apply a map like functionality on a given object
 */
const plan = (schema, obj) =>
  assign({}, obj, Object.keys(obj).reduce((acc, k) => {
    if (!obj.hasOwnProperty(k)) {
      return acc
    }

    return assign(acc, {
      [k]: schema[k](obj[k])
    })
  }, {}))

export default curry(plan)
