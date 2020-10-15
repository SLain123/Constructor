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

var createForm = function createForm(tagName) {
  var form;

  if (tagName === 'Заголовок') {
    form = _utils.default.form(" ".concat(_utils.default.input('content', 'Введите текст заголовка', 'Текст заголовка:'), "\n                            ").concat(_utils.default.select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'Выберите тип (величину) заголовка'), "\n                            ").concat(_utils.default.input('color', 'Введите цвет текста', 'Цвет текста:'), "\n                            ").concat(_utils.default.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта'), "\n                            ").concat(_utils.default.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта'), "\n                            ").concat(_utils.default.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта'), "\n                            ").concat(_utils.default.select('textAlign', ['left', 'center', 'right'], 'Выберите положение заголовка'), "\n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для заголовка (опционально), формат css', 'Дополнительные стили:'), "\n                            ").concat(_utils.default.submitBtn()));
  } else if (tagName === 'Обычный текст') {
    form = _utils.default.form(" ".concat(_utils.default.input('content', 'Введите текст абзаца', 'Текст абзаца:'), "\n                            ").concat(_utils.default.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста:'), "\n                            ").concat(_utils.default.input('color', 'Введите цвет текста', 'Цвет текста:'), "\n                            ").concat(_utils.default.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта'), "\n                            ").concat(_utils.default.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта'), "\n                            ").concat(_utils.default.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта'), "\n                            ").concat(_utils.default.select('textAlign', ['left', 'center', 'right'], 'Выберите положение текста'), "\n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для текста (опционально), формат css', 'Дополнительные стили:'), "\n                            ").concat(_utils.default.submitBtn()));
  } else if (tagName === 'Колонки с текстом') {
    form = _utils.default.form(" ".concat(_utils.default.textarea('content', 'Введите текст абзацев для каждого столбца через ; ', 'Текст колонок:'), "\n                            ").concat(_utils.default.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста:'), "\n                            ").concat(_utils.default.input('color', 'Введите цвет текста', 'Цвет текста:'), "\n                            ").concat(_utils.default.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта'), "\n                            ").concat(_utils.default.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта'), "\n                            ").concat(_utils.default.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта'), "                         \n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для заголовка', 'Дополнительные стили:'), "\n                            ").concat(_utils.default.submitBtn()));
  } else if (tagName === 'Изображение') {
    form = _utils.default.form(" ".concat(_utils.default.input('content', 'Путь до картинки', 'Укажите путь до картинки:'), "\n                            ").concat(_utils.default.input('alt', 'Введите описание для картинки:, (alt)', 'Введите описани картинки:'), "\n                            ").concat(_utils.default.input('width', 'Введите ширину картинки', 'Ширина:'), "\n                            ").concat(_utils.default.input('height', 'Введите высоту картинки', 'Длина:'), "\n                            ").concat(_utils.default.input('radius', 'Введите значение для скругления углов картинки (только цифры)', 'Величина скругления углов:'), "\n                            ").concat(_utils.default.select('justify', ['left', 'center', 'right'], 'Выберите положение картинки'), "                            \n                            ").concat(_utils.default.textarea('styles', 'Введите желаемые стили для картинки', 'Дополнительные стили:'), "\n                            ").concat(_utils.default.submitBtn()));
  }

  return form;
};

exports.createForm = createForm;

var onSubmitForm = function onSubmitForm(e) {
  e.preventDefault();
  var $mainSelect = document.querySelector('.main-select select');
  var dataClass = $mainSelect.options[$mainSelect.selectedIndex].value;
  var formLables = e.target.querySelectorAll('label');
  var mainData = {};

  var _iterator = _createForOfIteratorHelper(formLables),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var lable = _step.value;
      var dataBlock = lable.children[0];

      if (dataBlock.value) {
        mainData[dataBlock.name] = dataBlock.value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  e.target.reset();

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

var row = function row(content, id) {
  return "<div class=\"row\" id=\"".concat(id, "\">").concat(content).concat(removeBtn(), "</div>");
};

var col = function col(content, position) {
  if (position) {
    return "<div class=\"col ".concat(position, "\">").concat(content, "</div>");
  } else {
    return "<div class=\"col\">".concat(content, "</div>");
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

var input = function input(name, placeholder, label) {
  return "<div class=\"flex-column\"><label>".concat(label, "<input type=\"text\" placeholder=\"").concat(placeholder, "\" name=\"").concat(name, "\"></label></div>");
};

var textarea = function textarea(name, placeholder, label) {
  return "<div class=\"flex-column\"><label>".concat(label, "<textarea placeholder=\"").concat(placeholder, "\" name=").concat(name, "></textarea></label></div>");
};

var submitBtn = function submitBtn() {
  return "<button type=\"submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u043B\u043E\u043A</button>";
};

var justBtn = function justBtn() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Кнопка';
  var btn = document.createElement('button');
  btn.innerText = text;
  return btn;
};

var select = function select(name, options, label) {
  var opts = options.map(function (text) {
    return "<option>".concat(text, "</option>");
  });
  return "<div class=\"flex-column\"><label>".concat(label, "<select name=\"").concat(name, "\">").concat(opts, "</select></label></div>");
};

var removeBtn = function removeBtn() {
  return "<button class=\"delete-btn\">&#215;</button>";
};

var utils = {
  row: row,
  col: col,
  form: form,
  input: input,
  textarea: textarea,
  submitBtn: submitBtn,
  select: select,
  removeBtn: removeBtn,
  justBtn: justBtn
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
  function Block(id, content, tag, styles) {
    _classCallCheck(this, Block);

    this.id = id;
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
    var _this;

    var _ref$id = _ref.id,
        id = _ref$id === void 0 ? 'error-id' : _ref$id,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? 'Здесь должен быть какой то заголовок' : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'h1' : _ref$tag,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'black' : _ref$color,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? 'sans-serif' : _ref$fontFamily,
        _ref$fontStyle = _ref.fontStyle,
        fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
        _ref$fontWeight = _ref.fontWeight,
        fontWeight = _ref$fontWeight === void 0 ? 'normal' : _ref$fontWeight,
        _ref$textAlign = _ref.textAlign,
        textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, HeaderBlock);

    _this = _super.call(this, id, content, tag, styles);
    _this.color = color;
    _this.fontFamily = fontFamily;
    _this.fontStyle = fontStyle;
    _this.fontWeight = fontWeight;
    _this.textAlign = textAlign;
    return _this;
  }

  _createClass(HeaderBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return _utils.default.row(_utils.default.col("<".concat(this.tag, " class=\"title-").concat(this.id, "\" style=\"color: ").concat(this.color, "; font-family: ").concat(this.fontFamily, ";font-style: ").concat(this.fontStyle, "; font-weight: ").concat(this.fontWeight, "; text-align: ").concat(this.textAlign, "; ").concat(this.styles, "\">").concat(this.content, "</").concat(this.tag, ">")), this.id);
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
    var _this;

    var _ref$id = _ref.id,
        id = _ref$id === void 0 ? 'error-id' : _ref$id,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? 'Здесь должен быть какой то текст' : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'p' : _ref$tag,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? '16' : _ref$fontSize,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'black' : _ref$color,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? 'sans-serif' : _ref$fontFamily,
        _ref$fontStyle = _ref.fontStyle,
        fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
        _ref$fontWeight = _ref.fontWeight,
        fontWeight = _ref$fontWeight === void 0 ? 'normal' : _ref$fontWeight,
        _ref$textAlign = _ref.textAlign,
        textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, TextBlock);

    _this = _super.call(this, id, content, tag, styles);
    _this.color = color;
    _this.fontFamily = fontFamily;
    _this.fontStyle = fontStyle;
    _this.fontWeight = fontWeight;
    _this.textAlign = textAlign;
    _this.fontSize = fontSize;
    return _this;
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return _utils.default.row(_utils.default.col("<".concat(this.tag, " class=\"text-").concat(this.id, "\" style=\"font-size: ").concat(this.fontSize, "px; color: ").concat(this.color, "; font-family: ").concat(this.fontFamily, "; font-style: ").concat(this.fontStyle, "; font-weight: ").concat(this.fontWeight, "; text-align: ").concat(this.textAlign, "; ").concat(this.styles, "\">").concat(this.content, "</").concat(this.tag, ">")), this.id);
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
    var _this;

    var _ref$id = _ref.id,
        id = _ref$id === void 0 ? 'error-id' : _ref$id,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? ['Текст первой колонки', 'Текст второй колонки', 'Текст третьей колонки'] : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'span' : _ref$tag,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? '16' : _ref$fontSize,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'black' : _ref$color,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? 'sans-serif' : _ref$fontFamily,
        _ref$fontStyle = _ref.fontStyle,
        fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
        _ref$fontWeight = _ref.fontWeight,
        fontWeight = _ref$fontWeight === void 0 ? 'normal' : _ref$fontWeight,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, ColumnsBlock);

    _this = _super.call(this, id, content, tag, styles);
    _this.color = color;
    _this.fontFamily = fontFamily;
    _this.fontStyle = fontStyle;
    _this.fontWeight = fontWeight;
    _this.fontSize = fontSize;
    return _this;
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this2 = this;

      var resultArr = this.content.map(function (text) {
        return _utils.default.col("<".concat(_this2.tag, " class=\"columns-").concat(_this2.id, "\" style=\"font-size: ").concat(_this2.fontSize, "px; color: ").concat(_this2.color, "; font-family: ").concat(_this2.fontFamily, "; font-style: ").concat(_this2.fontStyle, "; font-weight: ").concat(_this2.fontWeight, "; ").concat(_this2.styles, "\">").concat(text, "</").concat(_this2.tag, ">"));
      }).join(' ');
      return _utils.default.row("".concat(resultArr), this.id);
    }
  }]);

  return ColumnsBlock;
}(_block.default);

var _default = ColumnsBlock;
exports.default = _default;
},{"./block":"script/classes/block.js","../components/utils":"script/components/utils.js"}],"assets/example.jpg":[function(require,module,exports) {
module.exports = "/example.d5aaa309.jpg";
},{}],"script/classes/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = _interopRequireDefault(require("./block"));

var _utils = _interopRequireDefault(require("../components/utils"));

var _example = _interopRequireDefault(require("../../assets/example.jpg"));

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
    var _this;

    var _ref$id = _ref.id,
        id = _ref$id === void 0 ? 'error-id' : _ref$id,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? 'Здесь должен быть путь до картинки' : _ref$content,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'img' : _ref$tag,
        _ref$alt = _ref.alt,
        alt = _ref$alt === void 0 ? 'pic' : _ref$alt,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? '500' : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? '300' : _ref$height,
        _ref$radius = _ref.radius,
        radius = _ref$radius === void 0 ? '0' : _ref$radius,
        justify = _ref.justify,
        _ref$styles = _ref.styles,
        styles = _ref$styles === void 0 ? '' : _ref$styles;

    _classCallCheck(this, ImageBlock);

    _this = _super.call(this, id, content, tag, styles);
    _this.alt = alt;
    _this.width = width;
    _this.height = height;
    _this.radius = radius;
    _this.justify = justify;
    return _this;
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return _utils.default.row(_utils.default.col("<img src=\"".concat(_example.default, "\" alt=\"").concat(this.alt, "\" class=\"pic-").concat(this.id, "\" data-path=\"").concat(this.content, "\" style=\"width: ").concat(this.width, "px; height: ").concat(this.height, "px; border-radius: ").concat(this.radius, "px; ").concat(this.styles, "\">"), this.justify), this.id);
    }
  }]);

  return ImageBlock;
}(_block.default);

var _default = ImageBlock;
exports.default = _default;
},{"./block":"script/classes/block.js","../components/utils":"script/components/utils.js","../../assets/example.jpg":"assets/example.jpg"}],"script/components/help.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var headerStartContent = 'Конструктор веб сайтов';
var textStartContent = 'Привет, этот небольшой проект задумывался как простой конструктор веб сайта. Он позволяет создать простую структуру из самых популярных блоков. После созданию по нажатию на кнпоку "Результат" ты получишь готовую HTML разметку вместе с описанием стилей. Ниже ты найдешь инструкцию к каждому из доступных блоков. И прежде чем начать конечно же удали все блоки с описанием со страницы, использовав "Очистить все", чтобы они не попали в разметку.';
var descriptionText = 'На текущий момент доступно 4 типа блоков: Заголовок, обычный Текст, текст в ввиде Столбцов и Изображение. С заголовком и обычным текстом все просто: укажи нужные параметры и введи сам текст. Для столбцов текста тебе необходимо указать точное количество столбцов в соотвествующем поле, кроме этого ОБЯЗАТЕЛЬНО раздели введеный текст на столбцы используя знак "; ". Каждый разделитель поместит часть текста в новый столбец.';
var help = {
  headerStartContent: headerStartContent,
  textStartContent: textStartContent,
  descriptionText: descriptionText
};
var _default = help;
exports.default = _default;
},{}],"script/components/storage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanAll = exports.removeDataStorage = exports.addDataToStorage = exports.getData = void 0;

var _header = _interopRequireDefault(require("../classes/header"));

var _text = _interopRequireDefault(require("../classes/text"));

var _columns = _interopRequireDefault(require("../classes/columns"));

var _image = _interopRequireDefault(require("../classes/image"));

var _help = _interopRequireDefault(require("./help"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _dataStorage = [new _header.default({
  id: 1,
  content: _help.default.headerStartContent,
  tag: 'h2',
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'Verdana, Geneva, sans-serif',
  styles: 'margin: 25px; text-shadow: 1px 1px 25px black;'
}), new _text.default({
  id: 2,
  content: _help.default.textStartContent,
  fontFamily: 'Verdana, Geneva, sans-serif',
  styles: 'background: #B2B2B2; padding: 30px; border-radius: 10px; box-shadow: 1px 1px 5px black;'
}), new _text.default({
  id: 3,
  content: _help.default.descriptionText,
  fontFamily: 'Verdana, Geneva, sans-serif',
  styles: 'background: #FFFF66; padding: 30px; border-radius: 10px; box-shadow: 1px 1px 5px black;'
}), new _columns.default({
  id: 4,
  content: ['Это', 'пример', 'блока', 'из', 'шести', 'столбцов']
}), new _image.default({
  id: 5,
  content: '/examplePath/...',
  width: 800,
  height: 460,
  radius: 45,
  justify: 'center',
  styles: 'margin-top: 10px'
})];
var _dataPanel = ['Заголовок', 'Обычный текст', 'Колонки с текстом', 'Изображение'];

var addDataToStorage = function addDataToStorage(data) {
  var storage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataStorage;
  storage.push(data);
};

exports.addDataToStorage = addDataToStorage;

var removeDataStorage = function removeDataStorage(id) {
  var numID = +id;

  if (!isNaN(numID)) {
    _dataStorage.forEach(function (obj, i) {
      if (obj.id === numID) {
        var copyArr = [].concat(_toConsumableArray(_dataStorage.slice(0, i)), _toConsumableArray(_dataStorage.slice(i + 1)));
        _dataStorage = copyArr;
      }
    });
  } else {
    throw new Error('ID блока имеет формат отличный от номера, удалить можно только блок с корреектным id');
  }
};

exports.removeDataStorage = removeDataStorage;

var cleanAll = function cleanAll() {
  _dataStorage = [];
};

exports.cleanAll = cleanAll;

var getData = function getData(request) {
  return request === 'content' ? _dataStorage : _dataPanel;
};

exports.getData = getData;
},{"../classes/header":"script/classes/header.js","../classes/text":"script/classes/text.js","../classes/columns":"script/classes/columns.js","../classes/image":"script/classes/image.js","./help":"script/components/help.js"}],"script/components/render.js":[function(require,module,exports) {
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

var _index = require("../index");

var createSelect = function createSelect(optsArr) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'select';
  var label = document.createElement('label');
  var select = document.createElement('select');
  label.innerHTML = 'Выберите тип блока:';
  label.classList.add(className);
  select.addEventListener('change', function (e) {
    return onChangeSelect(e);
  });
  optsArr.forEach(function (elem) {
    var opt = "<option>".concat(elem, "</option>");
    select.insertAdjacentHTML('beforeend', opt);
  });
  label.append(select);
  return label;
};

exports.createSelect = createSelect;

var onChangeSelect = function onChangeSelect(e) {
  var select = e.target;

  _index.management.changeForm(select.options[select.selectedIndex].value);
};
},{"../index":"script/index.js"}],"script/components/handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _header = _interopRequireDefault(require("../classes/header"));

var _text = _interopRequireDefault(require("../classes/text"));

var _columns = _interopRequireDefault(require("../classes/columns"));

var _image = _interopRequireDefault(require("../classes/image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(selectName, data, id) {
  var dataWithId = Object.assign(data, id);

  switch (selectName) {
    case 'Заголовок':
      return new _header.default(dataWithId);

    case 'Обычный текст':
      return new _text.default(dataWithId);

    case 'Колонки с текстом':
      return new _columns.default(convertTextToColumnArr(dataWithId));

    case 'Изображение':
      return new _image.default(dataWithId);
  }
};

exports.handler = handler;

var convertTextToColumnArr = function convertTextToColumnArr(data) {
  var result = data;

  if (data.content) {
    var columns = data.content.split('; ');
    result.content = columns;
    return result;
  } else {
    return data;
  }
};
},{"../classes/header":"script/classes/header.js","../classes/text":"script/classes/text.js","../classes/columns":"script/classes/columns.js","../classes/image":"script/classes/image.js"}],"script/components/cleaner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeControl = exports.removeForm = exports.removeContent = void 0;

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

var removeControl = function removeControl() {
  var controlBlock = document.querySelector('.control-block');
  controlBlock.remove();
};

exports.removeControl = removeControl;
},{}],"script/components/remove-btn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventOnRemoveBtns = void 0;

var _index = require("../index");

var eventOnRemoveBtns = function eventOnRemoveBtns() {
  var btns = document.querySelectorAll('.delete-btn');
  btns.forEach(function (btn) {
    return btn.addEventListener('click', function (e) {
      return _onClickByRemoveBtn(e);
    });
  });
};

exports.eventOnRemoveBtns = eventOnRemoveBtns;

var _onClickByRemoveBtn = function _onClickByRemoveBtn(e) {
  var mainConteiner = e.target.parentElement;

  if (mainConteiner.classList.contains('row')) {
    _index.management.removeOldData(mainConteiner.id);
  } else {
    throw new Error('Неверный родительский объект для удаления');
  }
};
},{"../index":"script/index.js"}],"script/components/control-btns.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createControlBlock = void 0;

var _utils = _interopRequireDefault(require("./utils"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createControlBlock = function createControlBlock() {
  var controlBlock = document.createElement('div');

  var cleanBtn = _utils.default.justBtn('Очистить все');

  var resultBtn = _utils.default.justBtn('Результат');

  controlBlock.classList.add('control-block');
  cleanBtn.classList.add('clean-btn');
  cleanBtn.addEventListener('click', function () {
    return _index.management.cleanAllData();
  });
  resultBtn.classList.add('result-btn');
  resultBtn.addEventListener('click', function () {
    return _index.management.displayResults();
  });
  controlBlock.append(cleanBtn);
  controlBlock.append(resultBtn);
  return controlBlock;
};

exports.createControlBlock = createControlBlock;
},{"./utils":"script/components/utils.js","../index":"script/index.js"}],"script/components/results.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetResults = exports.getStandartStyles = exports.results = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var results = function results(contentBlock, targetHTMLBlock, targetCSSBlock) {
  var allBlocks = Array.from(contentBlock.children);
  var result = [];

  for (var _i = 0, _allBlocks = allBlocks; _i < _allBlocks.length; _i++) {
    var block = _allBlocks[_i];
    var allChildBlocks = Array.from(block.children);

    if (allChildBlocks.length < 3) {
      // проверка на столбцы
      var _iterator = _createForOfIteratorHelper(allChildBlocks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var elem = _step.value;

          // перебор всех НЕ столбцов
          if (!elem.classList.contains('delete-btn')) {
            // проверка на контент, кроме кнопки удалить
            getStyles(elem.children[0], targetCSSBlock);
            result.push(handlerHTMLBlocks(elem));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      getStyles(allChildBlocks[0].children[0], targetCSSBlock);
      result.push(handlerHTMLColumns(allChildBlocks));
    }
  }

  targetHTMLBlock.innerText = result.join('\n');
};

exports.results = results;

var handlerHTMLBlocks = function handlerHTMLBlocks(elem) {
  var clone = elem.cloneNode(true);
  var space = "\xA0\xA0\xA0\xA0";
  clone.children[0].removeAttribute('style');
  return "<div class=\"row\">\n".concat(space, "<div class=\"col\">\n").concat(space).concat(space).concat(clone.innerHTML, "\n").concat(space, "</div>\n</div>");
};

var handlerHTMLColumns = function handlerHTMLColumns(elemsArr) {
  var space = "\xA0\xA0\xA0\xA0";
  var group = '';

  var _iterator2 = _createForOfIteratorHelper(elemsArr),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var elem = _step2.value;

      // перебор всех столбцов
      if (!elem.classList.contains('delete-btn')) {
        // кроме кнопки удалить
        var clone = elem.cloneNode(true);
        clone.children[0].removeAttribute('style');
        group += "\n".concat(space, "<div class=\"col\">\n").concat(space).concat(space).concat(clone.innerHTML, "\n").concat(space, "</div>");
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return "<div class=\"row\">".concat(group, "\n</div>");
};

var getStandartStyles = function getStandartStyles(targetCSSBlock) {
  var classStatus = {
    row: false,
    col: false,
    left: false,
    center: false,
    right: false
  };
  var classGuts = {
    row: ".row: {\n\xA0\xA0\xA0\xA0--bs-gutter-x: 1.5rem;\n\xA0\xA0\xA0\xA0--bs-gutter-y: 0;\n\xA0\xA0\xA0\xA0display: flex;\n\xA0\xA0\xA0\xA0flex-wrap: wrap;\n\xA0\xA0\xA0\xA0margin-top: calc(var(--bs-gutter-y) * -1);\n\xA0\xA0\xA0\xA0margin-right: calc(var(--bs-gutter-x)/ -2);\n\xA0\xA0\xA0\xA0margin-left: calc(var(--bs-gutter-x)/ -2); \n\xA0\xA0\xA0\xA0position: relative; \n}\n\n",
    col: ".col: {\n\xA0\xA0\xA0\xA0flex: 1 0 0%;\n\xA0\xA0\xA0\xA0width: 100%;\n\xA0\xA0\xA0\xA0max-width: 100%;\n\xA0\xA0\xA0\xA0padding-right: calc(var(--bs-gutter-x)/ 2);\n\xA0\xA0\xA0\xA0padding-left: calc(var(--bs-gutter-x)/ 2);\n\xA0\xA0\xA0\xA0margin-top: var(--bs-gutter-y); \n}\n\n",
    left: ".left: {\n\xA0\xA0\xA0\xA0display: flex; \n} \n\n",
    center: ".center: {\n\xA0\xA0\xA0\xA0display: flex;\n\xA0\xA0\xA0\xA0justify-content: center; \n}\n\n",
    right: ".right: {\n\xA0\xA0\xA0\xA0display: flex;\n\xA0\xA0\xA0\xA0justify-content: flex-end; \n}\n\n"
  };

  var checkClass = function checkClass(className) {
    if (document.querySelector(".".concat(className))) {
      classStatus[className] = true;
    }
  };

  var allClassesToCheck = ['row', 'col', 'left', 'center', 'right'];
  allClassesToCheck.forEach(function (name) {
    return checkClass(name);
  });

  for (name in classStatus) {
    if (classStatus[name]) {
      switch (name) {
        case 'row':
          targetCSSBlock.innerText += classGuts.row;
          break;

        case 'col':
          targetCSSBlock.innerText += classGuts.col;
          break;

        case 'left':
          targetCSSBlock.innerText += classGuts.left;
          break;

        case 'center':
          targetCSSBlock.innerText += classGuts.center;
          break;

        case 'right':
          targetCSSBlock.innerText += classGuts.right;
          break;
      }
    }
  }
};

exports.getStandartStyles = getStandartStyles;

var getStyles = function getStyles(elem, targetCSSBlock) {
  var space = "\xA0\xA0\xA0\xA0";
  var allStyles = elem.style;
  var classElem = elem.classList.value;
  var result = ".".concat(classElem, " { \n");

  for (var lineStyle in allStyles) {
    if (allStyles[lineStyle] && !isNaN(+lineStyle)) {
      var key = allStyles[lineStyle];
      var prop = allStyles[key];
      result += "".concat(space).concat(key, ": ").concat(prop, "; \n");
    }
  }

  result += "} \n \n";
  targetCSSBlock.innerText += result;
};

var resetResults = function resetResults(targetHTMLBlock, targetCSSBlock) {
  targetHTMLBlock.innerText = '';
  targetCSSBlock.innerText = '';
};

exports.resetResults = resetResults;
},{}],"script/components/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayModalResults = void 0;
var $body = document.querySelector('body');
var $modalOverlay = document.querySelector('.overlay');
var $closeModalBtn = document.querySelector('.results__close-btn');

var displayModalResults = function displayModalResults() {
  $body.classList.add('no-scroll');
  $modalOverlay.classList.remove('overlay_hide');
  $modalOverlay.classList.add('overlay_visible');
};

exports.displayModalResults = displayModalResults;

var closeModal = function closeModal() {
  $modalOverlay.classList.remove('overlay_visible');
  $body.classList.remove('no-scroll');
  setTimeout(function () {
    $modalOverlay.classList.add('overlay_hide');
  }, 900);
};

$modalOverlay.addEventListener('mousedown', function (e) {
  if (e.target === $modalOverlay) {
    closeModal();
  }
});
$closeModalBtn.addEventListener('click', function () {
  return closeModal();
});
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

var _removeBtn = require("../components/remove-btn");

var _controlBtns = require("../components/control-btns");

var _results = require("../components/results");

var _modal = require("../components/modal");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ManagementCenter = /*#__PURE__*/function () {
  function ManagementCenter(content, panel, startId, resultsHTML, resultsCSS) {
    var _this = this;

    _classCallCheck(this, ManagementCenter);

    _defineProperty(this, "addNewData", function (selectorName, data) {
      (0, _storage.addDataToStorage)((0, _handler.handler)(selectorName, data, _this._id));

      _this.updateId();

      (0, _cleaner.removeContent)(_this.contentBlock);

      _this.updateData();

      _this.initContent();
    });

    _defineProperty(this, "removeOldData", function (id) {
      (0, _storage.removeDataStorage)(id);
      (0, _cleaner.removeContent)(_this.contentBlock);

      _this.updateData();

      _this.initContent();
    });

    _defineProperty(this, "cleanAllData", function () {
      (0, _storage.cleanAll)();

      _this.updateData();

      (0, _cleaner.removeContent)(_this.contentBlock);

      _this.initContent();
    });

    _defineProperty(this, "changeForm", function (formName) {
      (0, _cleaner.removeForm)();
      (0, _cleaner.removeControl)();
      (0, _render.renderPanel)((0, _form.createForm)(formName), _this.panelBlock);
      (0, _render.renderPanel)((0, _controlBtns.createControlBlock)(), _this.panelBlock);
    });

    _defineProperty(this, "displayResults", function () {
      (0, _results.resetResults)(_this.resultsHTML, _this.resultsCSS);
      (0, _modal.displayModalResults)();
      (0, _results.getStandartStyles)(_this.resultsCSS);
      (0, _results.results)(_this.contentBlock, _this.resultsHTML, _this.resultsCSS);
    });

    this.contentBlock = content;
    this.panelBlock = panel;
    this.dataContent = (0, _storage.getData)('content');
    this.dataPanel = (0, _storage.getData)('panel');
    this.resultsHTML = resultsHTML;
    this.resultsCSS = resultsCSS;
    this._id = {
      id: startId
    };
  }

  _createClass(ManagementCenter, [{
    key: "updateData",
    value: function updateData() {
      this.dataContent = (0, _storage.getData)('content');
    }
  }, {
    key: "updateId",
    value: function updateId() {
      this._id.id += 1;
    }
  }, {
    key: "initContent",
    value: function initContent() {
      (0, _render.renderContent)(this.dataContent, this.contentBlock);
      (0, _removeBtn.eventOnRemoveBtns)();
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
      (0, _render.renderPanel)((0, _controlBtns.createControlBlock)(), this.panelBlock);
    }
  }]);

  return ManagementCenter;
}();

var _default = ManagementCenter;
exports.default = _default;
},{"../components/storage":"script/components/storage.js","../components/render":"script/components/render.js","../components/form":"script/components/form.js","../components/select":"script/components/select.js","../components/handler":"script/components/handler.js","../components/cleaner":"script/components/cleaner.js","../components/remove-btn":"script/components/remove-btn.js","../components/control-btns":"script/components/control-btns.js","../components/results":"script/components/results.js","../components/modal":"script/components/modal.js"}],"script/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.management = void 0;

var _management = _interopRequireDefault(require("./classes/management"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $content = document.querySelector('.content');
var $panel = document.querySelector('.panel');
var $resultsHTML = document.querySelector('.results__html');
var $resultsCSS = document.querySelector('.results__css');
var management = new _management.default($content, $panel, 10, $resultsHTML, $resultsCSS);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58228" + '/');

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