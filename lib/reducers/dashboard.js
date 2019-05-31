"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

var _appData = _interopRequireDefault(require("../config/app-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  DASHBOARD_ADD_THOUGHT,
  DASHBOARD_ADD_THOUGHT_SUCCESS,
  DASHBOARD_ADD_THOUGHT_FAILED,
  DASHBOARD_ADD_REFLECTION,
  DASHBOARD_ADD_REFLECTION_SUCCESS,
  DASHBOARD_ADD_REFLECTION_FAILED,
  NAVIGATE_SUCCESS
} = _actionNames.default;
const INITIAL_STATE = {
  questions: require('../config/questions.json.js') || [],
  thoughts: _appData.default.thoughts || null,
  busy: false
};
/**
 * Dashboard reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action
 * @returns {Object}
 */

function dashboardReducer(state = INITIAL_STATE, action) {
  const {
    type
  } = action;

  switch (type) {
    case DASHBOARD_ADD_THOUGHT:
      return { ...state,
        busy: true
      };

    case DASHBOARD_ADD_THOUGHT_SUCCESS:
      return { ...state,
        busy: false,
        thoughts: [action.thought, ...state.thoughts]
      };

    case DASHBOARD_ADD_THOUGHT_FAILED:
      return { ...state,
        busy: false
      };

    case DASHBOARD_ADD_REFLECTION:
      return { ...state,
        busy: true
      };

    case DASHBOARD_ADD_REFLECTION_SUCCESS:
      return { ...state,
        busy: false,
        thoughts: state.thoughts.map(thought => {
          if (thought.id === action.thoughtId) {
            return { ...thought,
              reflections: [action.reflection, ...thought.reflections]
            };
          }

          return thought;
        })
      };

    case DASHBOARD_ADD_REFLECTION_FAILED:
      return { ...state,
        busy: false
      };

    case NAVIGATE_SUCCESS:
      if (action.state && action.state.thoughts) {
        return { ...state,
          thoughts: action.state.thoughts
        };
      }

  }

  return state;
}

var _default = dashboardReducer;
exports.default = _default;