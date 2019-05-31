"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeMood = changeMood;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  LANDING_CHANGE_MOOD
} = _actionNames.default;
/**
 * Change mood on landing page
 * @param {Number} moodScore
 * @returns {Object}
 */

function changeMood(moodScore) {
  return {
    type: LANDING_CHANGE_MOOD,
    moodScore
  };
}