"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _auth = _interopRequireDefault(require("./auth"));

var _corporate = _interopRequireDefault(require("./corporate"));

var _crisis = _interopRequireDefault(require("./crisis"));

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _landing = _interopRequireDefault(require("./landing"));

var _navigation = _interopRequireDefault(require("./navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * App reducer
 * @param {Object} [state={}]
 * @param {Object} action
 * @returns {Object}
 */
function mainReducer(state = {}, action) {
  return {
    auth: (0, _auth.default)(state.auth, action),
    dashboard: (0, _dashboard.default)(state.dashboard, action),
    corporate: (0, _corporate.default)(state.corporate, action),
    crisis: (0, _crisis.default)(state.crisis, action),
    landing: (0, _landing.default)(state.landing, action),
    navigation: (0, _navigation.default)(state.navigation, action)
  };
}

var _default = mainReducer;
exports.default = _default;