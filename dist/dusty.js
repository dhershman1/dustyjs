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

  var add = curry(function (a, b) {
    return a + b;
  });

  var and = curry(function (a, b) {
    return a && b;
  });

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
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

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var assign = (function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.reduce(function (acc, x) {
      return _objectSpread({}, acc, x);
    }, {});
  });

  var capitalize = (function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  var isObject = (function (x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  });

  var clone = (function (x) {
    return isObject(x) ? _objectSpread({}, x) : x;
  });

  var not = (function (x) {
    return !x;
  });

  var complement = curry(function (fn, a) {
    return not(fn(a));
  });

  var isNil = (function (x) {
    return x == null;
  });

  var compress = (function (obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (!isNil(obj[k])) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  });

  var contains = curry(function (a, list) {
    return list.indexOf(a) !== -1;
  });

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

  var deepClone = (function (x) {
    return JSON.parse(JSON.stringify(x));
  });

  var defaults = curry(function (def, data) {
    var keys = Object.keys(def);
    return keys.reduce(function (acc, prop) {
      if (isNil(acc[prop])) {
        acc[prop] = def[prop];
      }
      return acc;
    }, data);
  });

  var flatten = function flatten(list) {
    return list.reduce(function (acc, x) {
      return acc.concat(Array.isArray(x) ? flatten(x) : x);
    }, []);
  };

  var difference = curry(function (a, _ref) {
    var _ref2 = _toArray(_ref),
        rest = _ref2.slice(0);
    var flatRest = flatten(rest);
    return a.filter(function (x) {
      return flatRest.indexOf(x) === -1;
    });
  });

  var div = curry(function (a, b) {
    return a / b;
  });

  var type = (function (x) {
    if (x === null) {
      return 'Null';
    }
    if (x === undefined) {
      return 'Undefined';
    }
    return Object.prototype.toString.call(x).slice(8, -1);
  });

  var empty = (function (x) {
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
  });

  var ensureArray = (function (x) {
    if (Array.isArray(x)) {
      return x;
    }
    if (isNil(x)) {
      return [];
    }
    return [x];
  });

  var entries = (function (obj) {
    return Object.keys(obj).map(function (k) {
      return [k, obj[k]];
    });
  });

  var every = curry(function (fn, x) {
    return x.every(fn);
  });

  var filter = curry(function (fn, list) {
    return list.filter(fn);
  });

  var find = curry(function (fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
    return false;
  });

  var first = (function (x) {
    return x[0];
  });

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
  var fuzzySearch = curry(function (n, h) {
    var hLen = h.length;
    var nLen = n.length;
    if (nLen > hLen) {
      return false;
    }
    if (nLen === hLen) {
      return n === h;
    }
    return search(h, n);
  });

  var gcd = curry(function (a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  });

  var gets = function gets(keys, obj) {
    return keys.map(function (k) {
      return obj[k];
    });
  };
  var gets$1 = curry(gets);

  var has = curry(function (prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  });

  var height = function height(obj) {
    return Object.keys(obj).length;
  };

  var identical = curry(function (a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
  });

  var identity = (function (a) {
    return a;
  });

  var includes = curry(function (a, str) {
    return str.indexOf(a) !== -1;
  });

  var insert = function insert(i, d, arr) {
    var idx = i < arr.length && i >= 0 ? i : arr.length;
    var result = arr.slice(0);
    result.splice(idx, 0, d);
    return result;
  };
  var insert$1 = curry(insert);

  var intersection = curry(function (a, b) {
    return a.filter(function (x) {
      return b.indexOf(x) !== -1;
    });
  });

  var is = curry(function (Ctor, x) {
    return !isNil(x) && x.constructor === Ctor || x instanceof Ctor;
  });

  var isEmpty = (function (x) {
    return not(Boolean(Object.keys(x).length));
  });

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
  var identical$1 = function identical(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
  };
  var equal = function equal(a, b) {
    var stackA = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var stackB = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var aType = typeConvert(Object.prototype.toString.call(a).slice(8, -1));
    if (identical$1(a, b)) {
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
        if (!(_typeof(a) === _typeof(b) && identical$1(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case 'date':
        if (!identical$1(a.valueOf(), b.valueOf())) {
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

  var isEqual = (function (a, b) {
    return equal(a, b, [], []);
  });

  var juxt = (function () {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return function () {
      for (var _len2 = arguments.length, x = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        x[_key2] = arguments[_key2];
      }
      return fns.map(function (f) {
        return f.apply(void 0, x);
      });
    };
  });

  var last = (function (x) {
    return x[x.length - 1];
  });

  var lcm = curry(function (a, b) {
    return Math.abs(Math.floor(a / gcd(a, b) * b));
  });

  var length = (function (a) {
    return a.length;
  });

  var map = curry(function (fn, list) {
    return list.map(fn);
  });

  var nth = curry(function (o, x) {
    var idx = o < 0 ? x.length + o : o;
    return x[idx];
  });

  var max = (function (x) {
    return nth(-1, x.sort(function (a, b) {
      return a > b;
    }));
  });

  var mean = (function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return x.reduce(function (a, v) {
      return a + v;
    }, 0) / x.length;
  });

  var min = (function (x) {
    return nth(0, x.sort(function (a, b) {
      return a > b;
    }));
  });

  var mul = curry(function (a, b) {
    return a * b;
  });

  var omit = curry(function (key, x) {
    var keyArr = ensureArray(key);
    return Object.keys(x).reduce(function (acc, prop) {
      if (keyArr.indexOf(prop) === -1) {
        acc[prop] = x[prop];
      }
      return acc;
    }, {});
  });

  var or = curry(function (a, b) {
    return a || b;
  });

  var partition = curry(function (fn, list) {
    return list.reduce(function (_ref, v) {
      var _ref2 = _slicedToArray(_ref, 2),
          pass = _ref2[0],
          fail = _ref2[1];
      return fn(v) ? [pass.concat(v), fail] : [pass, fail.concat(v)];
    }, [[], []]);
  });

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

  var pipe = curry(function (list, a) {
    return list.reduce(function (acc, fn) {
      return fn(acc);
    }, a);
  });

  var plan = function plan(schema, obj) {
    return assign({}, obj, Object.keys(obj).reduce(function (acc, k) {
      if (!obj.hasOwnProperty(k)) {
        return acc;
      }
      return assign(acc, _defineProperty({}, k, schema[k](obj[k])));
    }, {}));
  };
  var plan$1 = curry(plan);

  var pluck = curry(function (p, list) {
    return Object.keys(list).reduce(function (acc, v) {
      var val = list[v];
      if (isObject(val)) {
        acc.push.apply(acc, _toConsumableArray(pluck(p, val)));
        return acc;
      }
      if (v === p) {
        acc.push(val);
      }
      return acc;
    }, []);
  });

  var prepend = curry(function (x, list) {
    return [x].concat(_toConsumableArray(list));
  });

  var prop = curry(function (p, obj) {
    return obj[p];
  });

  var valid = function valid(a, b) {
    return !isNaN(a) || b && !isNaN(b);
  };
  var range = (function (from, to) {
    if (!valid(from, to)) {
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
  });

  var reduce = curry(function (fn, init, list) {
    return list.reduce(fn, init);
  });

  var reject = curry(function (fn, list) {
    return list.filter(function (v) {
      return !fn(v);
    });
  });

  var remove = curry(function (i, x) {
    return _toConsumableArray(x.slice(0, i)).concat(_toConsumableArray(x.slice(i + 1)));
  });

  var replace = curry(function (i, t, x) {
    return _toConsumableArray(x.slice(0, i)).concat([t], _toConsumableArray(x.slice(i + 1)));
  });

  var reverse = (function (arr) {
    return arr.slice().reverse();
  });

  var round = curry(function (precision, num) {
    return Number("".concat(Math.round("".concat(num, "e").concat(precision)), "e-").concat(precision));
  });

  var sift = function sift(arr, obj) {
    return arr.reduce(function (acc, v) {
      return assign(acc, _defineProperty({}, v, obj[v]));
    }, {});
  };
  var sift$1 = curry(sift);

  var slice = curry(function (a, b, list) {
    return list.slice(a, b);
  });

  var some = curry(function (fn, x) {
    return x.some(fn);
  });

  var sort = curry(function (fn, a) {
    return a.slice().sort(fn);
  });

  var sub = curry(function (a, b) {
    return a - b;
  });

  var trim = (function (str) {
    return str.trim();
  });

  var union = curry(function (a, _ref) {
    var _ref2 = _toArray(_ref),
        rest = _ref2.slice(0);
    return a.concat(flatten(rest)).reduce(function (acc, v) {
      return acc.indexOf(v) === -1 ? acc.concat(v) : acc;
    }, []);
  });

  var uniq = curry(function (fn, list) {
    return list.reduce(function (acc, a) {
      if (acc.map(fn).indexOf(fn(a)) === -1) {
        return acc.concat(a);
      }
      return acc;
    }, []);
  });

  var values = (function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  });

  var whole = function whole(schema, obj) {
    return Object.keys(schema).every(function (key) {
      return schema[key](obj[key]);
    });
  };
  var whole$1 = curry(whole);

  var words = (function (str) {
    return trim(str).split(/\s+/);
  });

  exports.add = add;
  exports.and = and;
  exports.any = any$1;
  exports.assign = assign;
  exports.capitalize = capitalize;
  exports.clone = clone;
  exports.complement = complement;
  exports.compress = compress;
  exports.contains = contains;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.deepClone = deepClone;
  exports.defaults = defaults;
  exports.difference = difference;
  exports.div = div;
  exports.empty = empty;
  exports.ensureArray = ensureArray;
  exports.entries = entries;
  exports.every = every;
  exports.filter = filter;
  exports.find = find;
  exports.first = first;
  exports.flatten = flatten;
  exports.fuzzySearch = fuzzySearch;
  exports.gcd = gcd;
  exports.gets = gets$1;
  exports.has = has;
  exports.height = height;
  exports.identical = identical;
  exports.identity = identity;
  exports.includes = includes;
  exports.insert = insert$1;
  exports.intersection = intersection;
  exports.is = is;
  exports.isEmpty = isEmpty;
  exports.isEqual = isEqual;
  exports.isNil = isNil;
  exports.juxt = juxt;
  exports.last = last;
  exports.lcm = lcm;
  exports.length = length;
  exports.map = map;
  exports.max = max;
  exports.mean = mean;
  exports.min = min;
  exports.mul = mul;
  exports.not = not;
  exports.nth = nth;
  exports.omit = omit;
  exports.or = or;
  exports.partition = partition;
  exports.path = path$1;
  exports.pipe = pipe;
  exports.plan = plan$1;
  exports.pluck = pluck;
  exports.prepend = prepend;
  exports.prop = prop;
  exports.range = range;
  exports.reduce = reduce;
  exports.reject = reject;
  exports.remove = remove;
  exports.replace = replace;
  exports.reverse = reverse;
  exports.round = round;
  exports.sift = sift$1;
  exports.slice = slice;
  exports.some = some;
  exports.sort = sort;
  exports.sub = sub;
  exports.trim = trim;
  exports.type = type;
  exports.union = union;
  exports.uniq = uniq;
  exports.values = values;
  exports.whole = whole$1;
  exports.words = words;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
