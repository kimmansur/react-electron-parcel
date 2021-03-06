"use strict";

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.HMR_PORT = 0;process.env.HMR_HOSTNAME = "localhost";parcelRequire = function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
      o = "function" == typeof require && require;function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;if (!t && f) return f(n, !0);if (i) return i(n, !0);if (o && "string" == typeof n) return o(n);var c = new Error("Cannot find module '" + n + "'");throw c.code = "MODULE_NOT_FOUND", c;
      }p.resolve = function (r) {
        return e[n][1][r] || r;
      };var l = r[n] = new u.Module(n);e[n][0].call(l.exports, p, l, l.exports, this);
    }return r[n].exports;function p(e) {
      return u(p.resolve(e));
    }
  }u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {};
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n;
    }, {}];
  };for (var f = 0; f < n.length; f++) {
    u(n[f]);
  }if (n.length) {
    var c = u(n[n.length - 1]);"object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
      return c;
    }) : t && (this[t] = c);
  }return u;
}({ "NyPj": [function (require, module, exports) {
    "use strict";
    module.exports = "logo.ad905280.svg";
  }, {}], "6cnO": [function (require, module, exports) {
    "use strict";
    module.exports = "github.23f3db4f.svg";
  }, {}], "pKEH": [function (require, module, exports) {
    "use strict";
  }, {}], "lY9v": [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("babel-runtime/core-js/object/get-prototype-of"),
        r = C(e),
        t = require("babel-runtime/helpers/classCallCheck"),
        l = C(t),
        a = require("babel-runtime/helpers/createClass"),
        u = C(a),
        n = require("babel-runtime/helpers/possibleConstructorReturn"),
        o = C(n),
        c = require("babel-runtime/helpers/inherits"),
        i = C(c),
        s = require("react"),
        f = C(s),
        d = require("react-dom"),
        h = C(d),
        p = require("react-hot-loader"),
        m = require("./icons/logo.svg"),
        b = C(m),
        q = require("./icons/github.svg"),
        g = C(q),
        v = require("electron");function C(e) {
      return e && e.__esModule ? e : { default: e };
    }require("./app.css");var _ = function (e) {
      function t() {
        var e, a, u, n;(0, l.default)(this, t);for (var c = arguments.length, i = Array(c), s = 0; s < c; s++) {
          i[s] = arguments[s];
        }return a = u = (0, o.default)(this, (e = t.__proto__ || (0, r.default)(t)).call.apply(e, [this].concat(i))), u.onClick = function () {
          alert("hey"), v.shell.openExternal("https://github.com/lucascassiano/react-electron-parcel");
        }, n = a, (0, o.default)(u, n);
      }return (0, i.default)(t, e), (0, u.default)(t, [{ key: "render", value: function value() {
          return f.default.createElement("div", { className: "content" }, f.default.createElement("img", { className: "logo", src: b.default }), f.default.createElement("h1", null, "React + Electron"), f.default.createElement("button", { onClick: this.onClick }, " ", f.default.createElement("img", { src: g.default }), " Fork me on Github"));
        } }]), t;
    }(s.Component);exports.default = _;
  }, { "./icons/logo.svg": "NyPj", "./icons/github.svg": "6cnO", "./app.css": "pKEH" }], "Focm": [function (require, module, exports) {
    "use strict";
    var e = require("react"),
        t = l(e),
        r = require("react-dom"),
        u = l(r),
        n = require("react-hot-loader"),
        d = require("./App.js"),
        a = l(d);function l(e) {
      return e && e.__esModule ? e : { default: e };
    }require("./index.css");var o = function o() {
      u.default.render(t.default.createElement(n.AppContainer, null, t.default.createElement(a.default, null)), window.document.getElementById("app"));
    };"undefined" != typeof window && o(), module.hot && module.hot.accept(o);
  }, { "./App.js": "lY9v", "./index.css": "pKEH" }] }, {}, ["Focm"], null);
//# sourceMappingURL=src.129fff94.map