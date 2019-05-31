"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _auth = _interopRequireDefault(require("./auth"));

var _corporate = _interopRequireDefault(require("./corporate"));

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _navigation = _interopRequireDefault(require("./navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = { ..._auth.default,
  ..._corporate.default,
  ..._dashboard.default,
  ..._navigation.default
};
exports.default = _default;