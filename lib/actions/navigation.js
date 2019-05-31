"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = navigate;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  NAVIGATE
} = _actionNames.default;
/**
 * Navigate
 * @param {String} path
 * @returns {Object}
 */

function navigate(path) {
  return {
    type: NAVIGATE,
    path
  };
}