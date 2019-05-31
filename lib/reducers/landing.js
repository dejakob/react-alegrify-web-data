"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  LANDING_CHANGE_MOOD
} = _actionNames.default;
const INITIAL_STATE = {
  moodScore: null
};
/**
 * Landing reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action 
 * @returns {Object}
 */

function landingReducer(state = INITIAL_STATE, action) {
  const {
    type
  } = action;

  switch (type) {
    case LANDING_CHANGE_MOOD:
      return { ...state,
        moodScore: action.moodScore
      };
  }

  return state;
}

var _default = landingReducer;
exports.default = _default;