"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

var _appData = _interopRequireDefault(require("../config/app-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  CORPORATE_ADD_ADMIN,
  CORPORATE_ADD_ADMIN_SUCCESS,
  CORPORATE_ADD_ADMIN_FAILED,
  CORPORATE_ADD_EMPLOYEE,
  CORPORATE_ADD_EMPLOYEE_SUCCESS,
  CORPORATE_ADD_EMPLOYEE_FAILED,
  CORPORATE_REMOVE_ADMIN,
  CORPORATE_REMOVE_ADMIN_SUCCESS,
  CORPORATE_REMOVE_ADMIN_FAILED,
  CORPORATE_REMOVE_EMPLOYEE,
  CORPORATE_REMOVE_EMPLOYEE_SUCCESS,
  CORPORATE_REMOVE_EMPLOYEE_FAILED,
  CORPORATE_REMOVE_PENDING_ADMIN,
  CORPORATE_REMOVE_PENDING_ADMIN_SUCCESS,
  CORPORATE_REMOVE_PENDING_ADMIN_FAILED,
  CORPORATE_REMOVE_PENDING_EMPLOYEE,
  CORPORATE_REMOVE_PENDING_EMPLOYEE_SUCCESS,
  CORPORATE_REMOVE_PENDING_EMPLOYEE_FAILED,
  CORPORATE_ADD_EVENT,
  CORPORATE_ADD_EVENT_SUCCESS,
  CORPORATE_ADD_EVENT_FAILED
} = _actionNames.default;
const INITIAL_STATE = {
  name: _appData.default.name || '',
  events: _appData.default.events || [],
  admins: _appData.default.admins || [],
  employees: _appData.default.employees || [],
  moods: _appData.default.corporateMoods || [],
  busy: false
};
/**
 * Corporate reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action 
 * @returns {Object}
 */

function corporateReducer(state = INITIAL_STATE, action) {
  const {
    type
  } = action;

  switch (type) {
    case CORPORATE_ADD_ADMIN:
      return { ...state,
        busy: true
      };

    case CORPORATE_ADD_ADMIN_SUCCESS:
      return { ...state,
        busy: false,
        admins: [action.admin, ...state.admins]
      };

    case CORPORATE_ADD_ADMIN_FAILED:
      return { ...state,
        busy: false
      };

    case CORPORATE_ADD_EMPLOYEE:
      return { ...state,
        busy: true
      };

    case CORPORATE_ADD_EMPLOYEE_SUCCESS:
      return { ...state,
        busy: false,
        employees: [action.employee, ...state.employees]
      };

    case CORPORATE_ADD_EMPLOYEE_FAILED:
      return { ...state,
        busy: false
      };

    case CORPORATE_REMOVE_ADMIN:
      return { ...state,
        busy: false
      };

    case CORPORATE_REMOVE_ADMIN_SUCCESS:
      return { ...state,
        busy: false,
        admins: state.admins.filter(admin => admin._id !== action.adminId)
      };

    case CORPORATE_REMOVE_ADMIN_FAILED:
      return { ...state,
        busy: false
      };

    case CORPORATE_REMOVE_EMPLOYEE:
      return { ...state,
        busy: true
      };

    case CORPORATE_REMOVE_EMPLOYEE_SUCCESS:
      return { ...state,
        busy: false,
        employees: state.employees.filter(employee => employee._id !== action.employeeId)
      };

    case CORPORATE_REMOVE_EMPLOYEE_FAILED:
      return { ...state,
        busy: false
      };

    case CORPORATE_REMOVE_PENDING_ADMIN:
      return { ...state,
        busy: true
      };

    case CORPORATE_REMOVE_PENDING_ADMIN_SUCCESS:
      return { ...state,
        busy: false,
        admins: state.admins.filter(admin => admin._id !== action.pendingAdminId)
      };

    case CORPORATE_REMOVE_PENDING_ADMIN_FAILED:
      return { ...state,
        busy: false
      };

    case CORPORATE_REMOVE_PENDING_EMPLOYEE:
      return { ...state,
        busy: true
      };

    case CORPORATE_REMOVE_PENDING_EMPLOYEE_SUCCESS:
      return { ...state,
        busy: false,
        employees: state.employees.filter(employee => employee._id !== employee.pendingAdminId)
      };

    case CORPORATE_REMOVE_PENDING_EMPLOYEE_FAILED:
      return { ...state,
        busy: false
      };

    case CORPORATE_ADD_EVENT:
      return { ...state,
        busy: true
      };

    case CORPORATE_ADD_EVENT_SUCCESS:
      return { ...state,
        busy: false,
        events: [action.event, ...state.events]
      };

    case CORPORATE_ADD_EVENT_FAILED:
      return { ...state,
        busy: false
      };
  }

  return state;
}

var _default = corporateReducer;
exports.default = _default;