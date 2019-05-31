"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

var _apiFetch = _interopRequireDefault(require("../services/api-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  NAVIGATE
} = _actionNames.default;
/**
 * Navigate
 * @param {Object} action 
 * @returns {Object}
 */

async function navigate(action) {
  const {
    path
  } = action;
  const {
    state
  } = await _apiFetch.default.get(`/api/state${path}`);

  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo(0, 0);
  }

  return {
    state
  };
}

var _default = {
  [NAVIGATE]: navigate
};
exports.default = _default;