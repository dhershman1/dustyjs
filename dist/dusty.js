(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.dusty = {})));
}(this, (function (exports) { 'use strict';

  var curry = function curry(f) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (f.length <= args.length) {
      return f.apply(void 0, args);
    }
    return function () {
      for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }
      return curry.apply(void 0, [f].concat(args, rest));
    };
  };

  var add = function add(a, b) {
    return a + b;
  };
  var add$1 = curry(add);

  var and = function and(a, b) {
    return a && b;
  };
  var and$1 = curry(and);

  var any = function any(schema, obj) {
    return Object.keys(schema).some(function (key) {
      return schema[key](obj[key]);
    });
  };
  var any$1 = curry(any);

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var assign = function assign() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.reduce(function (acc, x) {
      return _objectSpread({}, acc, x);
    }, {});
  };

  var capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var compact = function compact(arr) {
    return arr.filter(function (v) {
      return Boolean(v);
    });
  };

  var not = function not(x) {
    return !x;
  };

  var complement = function complement(fn, a) {
    return not(fn(a));
  };
  var complement$1 = curry(complement);

  var isNil = function isNil(x) {
    return x == null;
  };

  var compress = function compress(obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (!isNil(obj[k])) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  };

  var concat = function concat(arr) {
    return arr.reduce(function (acc, v) {
      return acc.concat(v);
    }, []);
  };

  var concatMap = function concatMap(fn, arr) {
    return arr.reduce(function (acc, v) {
      return acc.concat(fn(v));
    }, []);
  };
  var concatMap$1 = curry(concatMap);

  var contains = function contains(a, list) {
    return list.indexOf(a) !== -1;
  };
  var contains$1 = curry(contains);

  var curryN = function curryN() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var f = arguments.length > 1 ? arguments[1] : undefined;
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (n <= 0) {
      return f.apply(void 0, args);
    }
    return function () {
      for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }
      return curryN.apply(void 0, [n - rest.length, f].concat(args, rest));
    };
  };

  var deepClone = function deepClone(x) {
    return JSON.parse(JSON.stringify(x));
  };

  var defaults = function defaults(def, data) {
    return Object.keys(def).reduce(function (acc, prop) {
      if (acc[prop] == null) {
        acc[prop] = def[prop];
      }
      return acc;
    }, data);
  };
  var defaults$1 = curry(defaults);

  var difference = function difference(first, second) {
    return first.filter(function (x) {
      return second.indexOf(x) === -1;
    });
  };
  var difference$1 = curry(difference);

  var div = function div(a, b) {
    return a / b;
  };
  var div$1 = curry(div);

  var type = function type(x) {
    if (x === null) {
      return 'Null';
    }
    if (x === undefined) {
      return 'Undefined';
    }
    return Object.prototype.toString.call(x).slice(8, -1);
  };

  var empty = function empty(x) {
    if (type(x) === 'Array') {
      return [];
    }
    if (type(x) === 'String') {
      return '';
    }
    if (type(x) === 'Object') {
      return {};
    }
    throw new TypeError('Empty requires an emptyable type, like a String or Array');
  };

  var ensureArray = function ensureArray(x) {
    if (Array.isArray(x)) {
      return x;
    }
    if (isNil(x)) {
      return [];
    }
    return [x];
  };

  var entries = function entries(obj) {
    return Object.keys(obj).map(function (k) {
      return [k, obj[k]];
    });
  };

  var every = function every(fn, x) {
    return x.every(fn);
  };
  var every$1 = curry(every);

  var filter = function filter(fn, list) {
    return list.filter(fn);
  };
  var filter$1 = curry(filter);

  var find = function find(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
    return false;
  };
  var find$1 = curry(find);

  var first = function first(x) {
    return x[0];
  };

  var innerSearch = function innerSearch(start, haystack, nChar) {
    var j = start;
    var len = haystack.length;
    while (j < len) {
      if (haystack.charCodeAt(j++) === nChar) {
        return true;
      }
    }
    return false;
  };
  var search = function search(haystack, needle) {
    var len = needle.length;
    var j = 0;
    for (var i = 0; i < len; i++) {
      if (innerSearch(j, haystack, needle.charCodeAt(i))) {
        continue;
      }
      return false;
    }
    return true;
  };
  var fuzzySearch = function fuzzySearch(n, h) {
    var hLen = h.length;
    var nLen = n.length;
    if (nLen > hLen) {
      return false;
    }
    if (nLen === hLen) {
      return n === h;
    }
    return search(h, n);
  };
  var fuzzySearch$1 = curry(fuzzySearch);

  var gcd = function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  var gcd$1 = curry(gcd);

  var gets = function gets(keys, obj) {
    return keys.map(function (k) {
      return obj[k];
    });
  };
  var gets$1 = curry(gets);

  var gt = function gt(a, b) {
    return a > b;
  };
  var gt$1 = curry(gt);

  var gte = function gte(a, b) {
    return a >= b;
  };
  var gte$1 = curry(gte);

  var has = function has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
  var has$1 = curry(has);

  var height = function height(obj) {
    return Object.keys(obj).length;
  };

  var identical = function identical(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
  };
  var identical$1 = curry(identical);

  var identity = function identity(a) {
    return a;
  };

  var includes = function includes(a, str) {
    return str.indexOf(a) !== -1;
  };
  var includes$1 = curry(includes);

  var insert = function insert(i, d, arr) {
    var idx = i < arr.length && i >= 0 ? i : arr.length;
    var result = arr.slice(0);
    result.splice(idx, 0, d);
    return result;
  };
  var insert$1 = curry(insert);

  var intersection = function intersection(a, b) {
    return a.filter(function (x) {
      return b.indexOf(x) !== -1;
    });
  };
  var intersection$1 = curry(intersection);

  var is = function is(Ctor, x) {
    return !isNil(x) && x.constructor === Ctor || x instanceof Ctor;
  };
  var is$1 = curry(is);

  var isEmpty = function isEmpty(x) {
    return not(Boolean(Object.keys(x).length));
  };

  var arrayFromIterator = (function (iter) {
    var list = [];
    var next = '';
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  });

  var functionName = (function (f) {
    var match = String(f).match(/^function (\w*)/);
    return match == null ? '' : match[1];
  });

  var nullTypeCheck = function nullTypeCheck(a, b) {
    return a === null || b === null || Object.prototype.toString.call(a).slice(8, -1) !== Object.prototype.toString.call(b).slice(8, -1);
  };
  var regexCheck = function regexCheck(a, b) {
    var vals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode'];
    for (var i = 0; i < vals.length; i++) {
      var p = vals[i];
      if (a[p] !== b[p]) {
        return false;
      }
    }
    return true;
  };
  var typeConvert = function typeConvert(a) {
    var allTypes = {
      complex: ['Arguments', 'Array', 'Object'],
      simple: ['Boolean', 'Number', 'String'],
      date: ['Date'],
      err: ['Error'],
      regex: ['RegExp'],
      map: ['Map', 'Set'],
      other: ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'ArrayBuffer']
    };
    for (var prop in allTypes) {
      var currType = allTypes[prop];
      if (currType.indexOf(a) !== -1) {
        return prop;
      }
    }
    return '';
  };
  var identical$2 = function identical(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
  };
  var equal = function equal(a, b, stackA, stackB) {
    var aType = typeConvert(Object.prototype.toString.call(a).slice(8, -1));
    if (identical$2(a, b)) {
      return true;
    }
    if (nullTypeCheck(a, b)) {
      return false;
    }
    switch (aType) {
      case 'complex':
        if (typeof a.constructor === 'function' && functionName(a.constructor) === 'Promise') {
          return a === b;
        }
        break;
      case 'simple':
        if (!(_typeof(a) === _typeof(b) && identical$2(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case 'date':
        if (!identical$2(a.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case 'err':
        return a.name === b.name && a.message === b.message;
      case 'regex':
        if (!regexCheck(a, b)) {
          return false;
        }
        break;
      case 'map':
        if (!equal(arrayFromIterator(a.entries()), arrayFromIterator(b.entries()), stackA, stackB)) {
          return false;
        }
        break;
      case 'other':
        break;
      default:
        return false;
    }
    var keysA = Object.keys(a);
    if (keysA.length !== Object.keys(b).length) {
      return false;
    }
    var idx = stackA.length - 1;
    var idy = keysA.length - 1;
    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }
      idx -= 1;
    }
    stackA.push(a);
    stackB.push(b);
    while (idy >= 0) {
      var key = keysA[idy];
      if (!(Object.prototype.hasOwnProperty.call(b, key) && equal(b[key], a[key], stackA, stackB))) {
        return false;
      }
      idy -= 1;
    }
    stackA.pop();
    stackB.pop();
    return true;
  };

  var isEqual = function isEqual(a, b) {
    return equal(a, b, [], []);
  };

  var juxt = function juxt() {
    var fns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function () {
      for (var _len = arguments.length, x = new Array(_len), _key = 0; _key < _len; _key++) {
        x[_key] = arguments[_key];
      }
      return fns.map(function (f) {
        return f.apply(void 0, x);
      });
    };
  };

  var last = function last(x) {
    return x[x.length - 1];
  };

  var lcm = function lcm(a, b) {
    return Math.abs(Math.floor(a / gcd$1(a, b) * b));
  };
  var lcm$1 = curry(lcm);

  var length = function length(a) {
    return a.length;
  };

  var lt = function lt(a, b) {
    return a < b;
  };
  var lt$1 = curry(lt);

  var lte = function lte(a, b) {
    return a <= b;
  };
  var lte$1 = curry(lte);

  var map = function map(fn, list) {
    return list.map(fn);
  };
  var map$1 = curry(map);

  var nth = function nth(o, x) {
    var idx = o < 0 ? x.length + o : o;
    return x[idx];
  };
  var nth$1 = curry(nth);

  var max = function max(x) {
    return nth$1(-1, x.sort(function (a, b) {
      return a > b;
    }));
  };

  var mean = function mean() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return x.reduce(function (a, v) {
      return a + v;
    }, 0) / x.length;
  };

  var min = function min(x) {
    return nth$1(0, x.sort(function (a, b) {
      return a > b;
    }));
  };

  var mul = function mul(a, b) {
    return a * b;
  };
  var mul$1 = curry(mul);

  var omit = function omit(key, x) {
    var keyArr = ensureArray(key);
    return Object.keys(x).reduce(function (acc, prop) {
      if (keyArr.indexOf(prop) === -1) {
        acc[prop] = x[prop];
      }
      return acc;
    }, {});
  };
  var omit$1 = curry(omit);

  var or = function or(a, b) {
    return a || b;
  };
  var or$1 = curry(or);

  var partition = function partition(fn, list) {
    return list.reduce(function (_ref, v) {
      var _ref2 = _slicedToArray(_ref, 2),
          pass = _ref2[0],
          fail = _ref2[1];
      return fn(v) ? [pass.concat(v), fail] : [pass, fail.concat(v)];
    }, [[], []]);
  };
  var partition$1 = curry(partition);

  var path = function path(_ref, obj) {
    var _ref2 = _toArray(_ref),
        p = _ref2[0],
        keys = _ref2.slice(1);
    if (!keys.length) {
      return obj[p];
    }
    if (isNil(obj[p])) {
      return undefined;
    }
    return path(keys, obj[p]);
  };
  var path$1 = curryN(2, path);

  var pipe = function pipe(list, a) {
    return list.reduce(function (acc, fn) {
      return fn(acc);
    }, a);
  };
  var pipe$1 = curry(pipe);

  var plan = function plan(schema, obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (!obj.hasOwnProperty(k)) {
        return acc;
      }
      acc[k] = schema[k](obj[k]);
      return acc;
    }, {});
  };
  var plan$1 = curry(plan);

  var isObject = (function (x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  });

  var pluck = function pluck(p, list) {
    return Object.keys(list).reduce(function (acc, v) {
      var val = list[v];
      if (isObject(val)) {
        return acc.concat(pluck(p, val));
      }
      if (v === p) {
        acc.push(val);
      }
      return acc;
    }, []);
  };
  var pluck$1 = curry(pluck);

  var prepend = function prepend(x, list) {
    return [].concat(x, list);
  };
  var prepend$1 = curry(prepend);

  var prop = function prop(p, obj) {
    return obj[p];
  };
  var prop$1 = curry(prop);

  var range = function range(from, to) {
    if (!isNaN(from) || to && !isNaN(to)) {
      throw new TypeError('Both Arguments should be a number type');
    }
    var result = [];
    var stop = to;
    var start = from;
    if (!to) {
      start = 0;
      stop = from;
    }
    while (start < stop) {
      result.push(start);
      start += 1;
    }
    return result;
  };

  var reduce = function reduce(fn, init, list) {
    return list.reduce(fn, init);
  };
  var reduce$1 = curry(reduce);

  var reject = function reject(fn, list) {
    return list.filter(function (v) {
      return !fn(v);
    });
  };
  var reject$1 = curry(reject);

  var remove = function remove(i, x) {
    return [].concat(x.slice(0, i), x.slice(i + 1));
  };
  var remove$1 = curry(remove);

  var reverse = function reverse(arr) {
    return arr.slice().reverse();
  };

  var round = function round(precision, num) {
    return Number("".concat(Math.round("".concat(num, "e").concat(precision)), "e-").concat(precision));
  };
  var round$1 = curry(round);

  var sift = function sift(arr, obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (arr.indexOf(k) !== -1) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  };
  var sift$1 = curry(sift);

  var slice = function slice(a, b, list) {
    return list.slice(a, b);
  };
  var slice$1 = curry(slice);

  var some = function some(fn, x) {
    return x.some(fn);
  };
  var some$1 = curry(some);

  var sort = function sort(fn, a) {
    return a.slice().sort(fn);
  };
  var sort$1 = curry(sort);

  var sub = function sub(a, b) {
    return a - b;
  };
  var sub$1 = curry(sub);

  var trim = function trim(str) {
    return str.trim();
  };

  var uniqBy = function uniqBy(fn, list) {
    return list.reduce(function (acc, a) {
      if (acc.map(fn).indexOf(fn(a)) === -1) {
        acc.push(a);
      }
      return acc;
    }, []);
  };
  var uniqBy$1 = curry(uniqBy);

  var uniq = uniqBy$1(identity);

  var union = function union(list, other) {
    return uniq(list.concat(other));
  };
  var union$1 = curry(union);

  var update = function update(index, val, list) {
    return [].concat(list.slice(0, index), val, list.slice(index + 1));
  };
  var update$1 = curry(update);

  var values = function values(obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var when = function when(fn, act) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (fn.apply(void 0, args)) {
      return act.apply(void 0, args);
    }
    return undefined;
  };
  var when$1 = curryN(3, when);

  var whole = function whole(schema, obj) {
    return Object.keys(schema).every(function (key) {
      return schema[key](obj[key]);
    });
  };
  var whole$1 = curry(whole);

  var words = function words(str) {
    return trim(str).split(/\s+/);
  };

  exports.add = add$1;
  exports.and = and$1;
  exports.any = any$1;
  exports.assign = assign;
  exports.capitalize = capitalize;
  exports.compact = compact;
  exports.complement = complement$1;
  exports.compress = compress;
  exports.concat = concat;
  exports.concatMap = concatMap$1;
  exports.contains = contains$1;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.deepClone = deepClone;
  exports.defaults = defaults$1;
  exports.difference = difference$1;
  exports.div = div$1;
  exports.empty = empty;
  exports.ensureArray = ensureArray;
  exports.entries = entries;
  exports.every = every$1;
  exports.filter = filter$1;
  exports.find = find$1;
  exports.first = first;
  exports.fuzzySearch = fuzzySearch$1;
  exports.gcd = gcd$1;
  exports.gets = gets$1;
  exports.gt = gt$1;
  exports.gte = gte$1;
  exports.has = has$1;
  exports.height = height;
  exports.identical = identical$1;
  exports.identity = identity;
  exports.includes = includes$1;
  exports.insert = insert$1;
  exports.intersection = intersection$1;
  exports.is = is$1;
  exports.isEmpty = isEmpty;
  exports.isEqual = isEqual;
  exports.isNil = isNil;
  exports.juxt = juxt;
  exports.last = last;
  exports.lcm = lcm$1;
  exports.length = length;
  exports.lt = lt$1;
  exports.lte = lte$1;
  exports.map = map$1;
  exports.max = max;
  exports.mean = mean;
  exports.min = min;
  exports.mul = mul$1;
  exports.not = not;
  exports.nth = nth$1;
  exports.omit = omit$1;
  exports.or = or$1;
  exports.partition = partition$1;
  exports.path = path$1;
  exports.pipe = pipe$1;
  exports.plan = plan$1;
  exports.pluck = pluck$1;
  exports.prepend = prepend$1;
  exports.prop = prop$1;
  exports.range = range;
  exports.reduce = reduce$1;
  exports.reject = reject$1;
  exports.remove = remove$1;
  exports.reverse = reverse;
  exports.round = round$1;
  exports.sift = sift$1;
  exports.slice = slice$1;
  exports.some = some$1;
  exports.sort = sort$1;
  exports.sub = sub$1;
  exports.trim = trim;
  exports.type = type;
  exports.union = union$1;
  exports.uniq = uniq;
  exports.uniqBy = uniqBy$1;
  exports.update = update$1;
  exports.values = values;
  exports.when = when$1;
  exports.whole = whole$1;
  exports.words = words;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
