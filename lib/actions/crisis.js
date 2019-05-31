"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeCountry = changeCountry;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  CRISIS_CHANGE_COUNTRY
} = _actionNames.default;
/**
 * Change country for crisis resources
 * @param {String} country 
 * @returns {Object}
 */

function changeCountry(country) {
  return {
    type: CRISIS_CHANGE_COUNTRY,
    country
  };
}