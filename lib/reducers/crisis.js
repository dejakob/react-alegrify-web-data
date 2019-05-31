"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

var _appData = _interopRequireDefault(require("../config/app-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  CRISIS_CHANGE_COUNTRY,
  CRISIS_CHANGE_COUNTRY_SUCCESS,
  CRISIS_CHANGE_COUNTRY_FAILED,
  NAVIGATE_SUCCESS
} = _actionNames.default;
const INITIAL_STATE = {
  crisisResources: _appData.default.crisisResources || [],
  selectedCountry: _appData.default.selectedCountry || 'be',
  busy: false
};
/**
 * Crisis reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action 
 * @returns {Object}
 */

function crisisReducer(state = INITIAL_STATE, action) {
  const {
    type
  } = action;

  switch (type) {
    case CRISIS_CHANGE_COUNTRY:
      return { ...state,
        busy: true
      };

    case CRISIS_CHANGE_COUNTRY_SUCCESS:
      return { ...state,
        busy: false,
        country: action.country
      };

    case CRISIS_CHANGE_COUNTRY_FAILED:
      return { ...state,
        busy: falser
      };

    case NAVIGATE_SUCCESS:
      if (action.state && action.state.crisisResources) {
        return { ...state,
          crisisResources: action.state.crisisResources
        };
      }

  }

  return state;
}

var _default = crisisReducer;
exports.default = _default;