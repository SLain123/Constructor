// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script/components/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSubmitForm = exports.createForm = void 0;

var _utils = _interopRequireDefault(require("./utils"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Создает форму с различным наполнением в зависимости от переданного имени, передает на рендер;
var createForm = function createForm(tagName) {
  var form;

  if (tagName === 'Заголовок') {
    form = _utils.default.form(" ".concat(_utils.default.input('content', 'Введите текст заголовка'), "\n                            ").concat(_utils.default.select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']), "       \n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для заголовка'), "\n                            ").concat(_utils.default.submitBtn()));
  } else if (tagName === 'Абзац с текстом') {
    form = _utils.default.form(" ".concat(_utils.default.input('content', 'Введите текст абзаца'), "                          \n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для заголовка'), "\n                            ").concat(_utils.default.submitBtn()));
  } else if (tagName === 'Столбцы с текстом') {
    form = _utils.default.form(" ".concat(_utils.default.textarea('content', 'Введите текст абзацев для каждого столбца через ;'), "                          \n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для заголовка'), "\n                            ").concat(_utils.default.submitBtn()));
  } else if (tagName === 'Картинка') {
    form = _utils.default.form(" ".concat(_utils.default.input('content', 'Путь до картинки'), "                          \n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для картинки'), "\n                            ").concat(_utils.default.submitBtn()));
  }

  return form;
}; // Ивент отправки данных из формы, передает данные функции которая создает верную структуру данных;


exports.createForm = createForm;

var onSubmitForm = function onSubmitForm(e) {
  e.preventDefault();
  var $mainSelect = document.querySelector('.main-select');
  var dataClass = $mainSelect.options[$mainSelect.selectedIndex].value;
  var formChildren = e.target.children;
  var mainData = {};

  var _iterator = _createForOfIteratorHelper(formChildren),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      mainData[elem.name] = elem.value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  _index.management.addNewData(dataClass, mainData);
};

exports.onSubmitForm = onSubmitForm;
},{"./utils":"script/components/utils.js","../index":"script/index.js"}],"script/components/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _form = require("../components/form");

var row = function row(content) {
  return "<div class=\"row\">".concat(content, "</div>");
};

var col = function col(content, num) {
  if (!num) {
    return "<div class=\"col\">".concat(content, "</div>");
  } else {
    return "<div class=\"col-".concat(num, "\">").concat(content, "</div>");
  }
};

var form = function form(content) {
  var form = document.createElement('form');
  form.classList.add('form');
  form.addEventListener('submit', function (e) {
    return (0, _form.onSubmitForm)(e);
  });
  form.insertAdjacentHTML('beforeend', content);
  return form;
};

var input = function input(name, placeholder) {
  return "<input type=\"text\" placeholder=\"".concat(placeholder, "\" name=\"").concat(name, "\">");
};

var textarea = function textarea(name, placeholder) {
  return "<textarea placeholder=\"".concat(placeholder, "\" name=").concat(name, "></textarea>");
};

var submitBtn = function submitBtn() {
  return "<button type=\"submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>";
};

var select = function select(name, options) {
  var opts = options.map(function (text) {
    return "<option>".concat(text, "</option>");
  });
  return "<select name=\"".concat(name, "\">").concat(opts, "</select>");
};

var getCss = function getCss(styles) {
  return styles ? Object.keys(styles).map(function (p) {
    return "".concat(p, ": ").concat(styles[p]);
  }).join('; ') : '';
};

var utils = {
  row: row,
  col: col,
  getCss: getCss,
  form: form,
  input: input,
  textarea: textarea,
  submitBtn: submitBtn,
  select: select
};
var _default = utils;
exports.default = _default;
},{"../components/form":"script/components/form.js"}],"script/classes/block.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("../components/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(type, content, tag, styles) {
    _classCallCheck(this, Block);

    this.type = type;
    this.content = content;
    this.tag = tag;
    this.styles = styles;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('ОШИБКА: Метод toHTML должен быть реализован.');
    }
  }]);

  return Block;
}();

var _default = Block;
exports.default = _default;
},{"../components/utils":"script/components/utils.js"}],"script/classes/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = _interopRequireDefault(require("./block"));

var _utils = _interopRequireDefault(require("../components/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HeaderBlock = /*#__PURE__*/function (_Block) {
  _inherits(HeaderBlock, _Block);

  var _super = _createSuper(HeaderBlock);

  function HeaderBlock(_ref) {
    var _ref$content = _ref.content,
        content = _ref$content === void 0 ? 'Здесь должен быть какой то заголовок' : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'h1' : _ref$tag,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, HeaderBlock);

    return _super.call(this, 'header', content, tag, styles);
  }

  _createClass(HeaderBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return _utils.default.row(_utils.default.col("<".concat(this.tag, " class=\"title\" style=\"").concat(_utils.default.getCss(this.styles), "\">").concat(this.content, "</").concat(this.tag, ">")));
    }
  }]);

  return HeaderBlock;
}(_block.default);

var _default = HeaderBlock;
exports.default = _default;
},{"./block":"script/classes/block.js","../components/utils":"script/components/utils.js"}],"script/classes/text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = _interopRequireDefault(require("./block"));

var _utils = _interopRequireDefault(require("../components/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextBlock = /*#__PURE__*/function (_Block) {
  _inherits(TextBlock, _Block);

  var _super = _createSuper(TextBlock);

  function TextBlock(_ref) {
    var _ref$content = _ref.content,
        content = _ref$content === void 0 ? 'Здесь должен быть какой то текст' : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'p' : _ref$tag,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, TextBlock);

    return _super.call(this, 'text', content, tag, styles);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return _utils.default.row(_utils.default.col("<".concat(this.tag, " class=\"text\" style=\"").concat(_utils.default.getCss(this.styles), "\">").concat(this.content, "</").concat(this.tag, ">")));
    }
  }]);

  return TextBlock;
}(_block.default);

var _default = TextBlock;
exports.default = _default;
},{"./block":"script/classes/block.js","../components/utils":"script/components/utils.js"}],"script/classes/columns.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = _interopRequireDefault(require("./block"));

var _utils = _interopRequireDefault(require("../components/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ColumnsBlock = /*#__PURE__*/function (_Block) {
  _inherits(ColumnsBlock, _Block);

  var _super = _createSuper(ColumnsBlock);

  function ColumnsBlock(_ref) {
    var _ref$content = _ref.content,
        content = _ref$content === void 0 ? 'Здесь должен быть какой то массив с текстом для колонок' : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'span' : _ref$tag,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, ColumnsBlock);

    return _super.call(this, 'text', content, tag, styles);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this = this;

      var resultArr = this.content.map(function (text) {
        return _utils.default.col("<".concat(_this.tag, " class=\"columns\" style=\"").concat(_utils.default.getCss(_this.styles), "\">").concat(text, "</").concat(_this.tag, ">"), 3);
      }).join(' ');
      return _utils.default.row("".concat(resultArr));
    }
  }]);

  return ColumnsBlock;
}(_block.default);

var _default = ColumnsBlock;
exports.default = _default;
},{"./block":"script/classes/block.js","../components/utils":"script/components/utils.js"}],"script/classes/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = _interopRequireDefault(require("./block"));

var _utils = _interopRequireDefault(require("../components/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ImageBlock = /*#__PURE__*/function (_Block) {
  _inherits(ImageBlock, _Block);

  var _super = _createSuper(ImageBlock);

  function ImageBlock(_ref) {
    var _ref$content = _ref.content,
        content = _ref$content === void 0 ? 'Здесь должен быть путь до картинки' : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'img' : _ref$tag,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, ImageBlock);

    return _super.call(this, 'text', content, tag, styles);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return _utils.default.row("<img src=\"".concat(this.content, "\" alt=\"pic\" style=\"").concat(_utils.default.getCss(this.styles), "\">"));
    }
  }]);

  return ImageBlock;
}(_block.default);

var _default = ImageBlock;
exports.default = _default;
},{"./block":"script/classes/block.js","../components/utils":"script/components/utils.js"}],"assets/example.jpg":[function(require,module,exports) {
module.exports = "/example.d5aaa309.jpg";
},{}],"script/components/storage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDataToStorage = exports.getData = void 0;

var _header = _interopRequireDefault(require("../classes/header"));

var _text = _interopRequireDefault(require("../classes/text"));

var _columns = _interopRequireDefault(require("../classes/columns"));

var _image = _interopRequireDefault(require("../classes/image"));

var _example = _interopRequireDefault(require("../../assets/example.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dataStorage = [new _header.default({
  content: 'Hot headerrrrr',
  tag: 'h2',
  styles: {
    'text-align': 'center',
    'color': 'red'
  }
}), new _text.default({
  type: 'text',
  content: 'this\'s super text',
  styles: {
    'background': 'yellow'
  }
}), new _columns.default({
  type: 'columns',
  content: [123, 345, 567, 888]
}), new _image.default({
  type: 'image',
  content: _example.default
})];
var _dataPanel = ['Заголовок', 'Обычный текст', 'Колонки с текстом', 'Изображение'];

var addDataToStorage = function addDataToStorage(data) {
  var storage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataStorage;
  storage.push(data);
};

exports.addDataToStorage = addDataToStorage;

var getData = function getData(request) {
  return request === 'content' ? _dataStorage : _dataPanel;
};

exports.getData = getData;
},{"../classes/header":"script/classes/header.js","../classes/text":"script/classes/text.js","../classes/columns":"script/classes/columns.js","../classes/image":"script/classes/image.js","../../assets/example.jpg":"assets/example.jpg"}],"script/components/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderForm = exports.renderPanel = exports.renderContent = void 0;

var renderContent = function renderContent(blocks, parentElement) {
  blocks.forEach(function (block) {
    parentElement.insertAdjacentHTML('beforeend', block.toHTML());
  });
};

exports.renderContent = renderContent;

var renderPanel = function renderPanel(block, parentElement) {
  parentElement.append(block);
};

exports.renderPanel = renderPanel;

var renderForm = function renderForm(block, parentElement) {
  parentElement.insertAdjacentHTML('beforeend', block);
};

exports.renderForm = renderForm;
},{}],"script/components/select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSelect = void 0;

var createSelect = function createSelect(optsArr) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'select';
  var select = document.createElement('select');
  select.classList.add(className);
  select.addEventListener('change', function (e) {
    return changeSelect(e);
  });
  optsArr.forEach(function (elem) {
    var opt = "<option>".concat(elem, "</option>");
    select.insertAdjacentHTML('beforeend', opt);
  });
  return select;
}; // Ивент для изменения основного селектора в панели, удаляет форму от старого блока и запускает создание новой формы для выбранного блока;


exports.createSelect = createSelect;

var changeSelect = function changeSelect(e) {
  var select = e.target; // createForm(select.options[select.selectedIndex].value);

  console.log(select);
};
},{}],"script/components/handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _header = _interopRequireDefault(require("../classes/header"));

var _text = _interopRequireDefault(require("../classes/text"));

var _columns = _interopRequireDefault(require("../classes/columns"));

var _image = _interopRequireDefault(require("../classes/image"));

var _example = _interopRequireDefault(require("../../assets/example.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(selectName, data) {
  switch (selectName) {
    case 'Заголовок':
      return new _header.default(data);
  }
};

exports.handler = handler;
},{"../classes/header":"script/classes/header.js","../classes/text":"script/classes/text.js","../classes/columns":"script/classes/columns.js","../classes/image":"script/classes/image.js","../../assets/example.jpg":"assets/example.jpg"}],"script/components/cleaner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeForm = exports.removeContent = void 0;

var removeContent = function removeContent(parentBlock) {
  var children = Array.from(parentBlock.children);
  children.forEach(function (elem) {
    return elem.remove();
  });
};

exports.removeContent = removeContent;

var removeForm = function removeForm() {
  var form = document.querySelector('.form');
  form.remove();
};

exports.removeForm = removeForm;
},{}],"script/classes/management.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storage = require("../components/storage");

var _render = require("../components/render");

var _form = require("../components/form");

var _select = require("../components/select");

var _handler = require("../components/handler");

var _cleaner = require("../components/cleaner");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ManagementCenter = /*#__PURE__*/function () {
  function ManagementCenter(content, panel) {
    var _this = this;

    _classCallCheck(this, ManagementCenter);

    _defineProperty(this, "addNewData", function (selectorName, data) {
      (0, _storage.addDataToStorage)((0, _handler.handler)(selectorName, data));
      (0, _cleaner.removeContent)(_this.contentBlock);

      _this.initContent();
    });

    this.contentBlock = content;
    this.panelBlock = panel;
    this.dataContent = (0, _storage.getData)('content');
    this.dataPanel = (0, _storage.getData)('panel');
  }

  _createClass(ManagementCenter, [{
    key: "initContent",
    value: function initContent() {
      (0, _render.renderContent)(this.dataContent, this.contentBlock);
    }
  }, {
    key: "initPanel",
    value: function initPanel() {
      (0, _render.renderPanel)((0, _select.createSelect)(this.dataPanel, 'main-select'), this.panelBlock);
    }
  }, {
    key: "renderStartForm",
    value: function renderStartForm() {
      (0, _render.renderPanel)((0, _form.createForm)('Заголовок'), this.panelBlock);
    }
  }]);

  return ManagementCenter;
}();

var _default = ManagementCenter;
exports.default = _default;
},{"../components/storage":"script/components/storage.js","../components/render":"script/components/render.js","../components/form":"script/components/form.js","../components/select":"script/components/select.js","../components/handler":"script/components/handler.js","../components/cleaner":"script/components/cleaner.js"}],"script/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.management = void 0;

var _management = _interopRequireDefault(require("./classes/management"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $content = document.querySelector('.content');
var $panel = document.querySelector('.panel');
var management = new _management.default($content, $panel);
exports.management = management;
management.initContent();
management.initPanel();
management.renderStartForm();
},{"./classes/management":"script/classes/management.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55214" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/index.js"], null)
//# sourceMappingURL=/script.7c337ef3.js.map