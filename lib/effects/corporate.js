"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

var _apiFetch = _interopRequireDefault(require("../services/api-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  CORPORATE_ADD_ADMIN,
  CORPORATE_ADD_EMPLOYEE,
  CORPORATE_REMOVE_ADMIN,
  CORPORATE_REMOVE_EMPLOYEE,
  CORPORATE_REMOVE_PENDING_ADMIN,
  CORPORATE_REMOVE_PENDING_EMPLOYEE,
  CORPORATE_ADD_EVENT
} = _actionNames.default;
/**
 * Add admin
 * @param {Object} action
 * @returns {Object}
 */

async function addAdmin(action) {
  const {
    corporateId,
    email
  } = action;
  const invitationId = await _apiFetch.default.post(`/api/corp/${corporateId}/invite`, {
    corp_employees_add_admin: true,
    corp_employees_add: email
  });
  const admin = {
    _id: invitationId,
    email
  };
  admin.admin = true;
  admin.pending = true;
  return {
    admin
  };
}
/**
 * Add employee
 * @param {Object} action
 * @returns {Object}
 */


async function addEmployee(action) {
  const {
    corporateId,
    email
  } = action;
  const invitationId = await _apiFetch.default.post(`/api/corp/${corporateId}/invite`, {
    corp_employees_add_admin: false,
    corp_employees_add: email
  });
  const employee = {
    _id: invitationId,
    email
  };
  employee.admin = false;
  employee.pending = true;
  return {
    employee
  };
}
/**
 * Remove admin
 * @param {Object} action
 * @returns {Object}
 */


async function removeAdmin(action) {
  const {
    corporateId,
    adminId
  } = action;
  await _apiFetch.default.remove(`/api/corp/${corporateId}/employee/${adminId}`);
  return {
    adminId
  };
}
/**
 * Remove employee
 * @param {Object} action
 * @returns {Object}
 */


async function removeEmployee(action) {
  const {
    corporateId,
    employeeId
  } = action;
  await _apiFetch.default.remove(`/api/corp/${corporateId}/employee/${employeeId}`);
  return {
    employeeId
  };
}
/**
 * Remove pending admin
 * @param {Object} action
 * @returns {Object}
 */


async function removePendingAdmin(action) {
  const {
    corporateId,
    pendingAdminId
  } = action;
  await _apiFetch.default.remove(`/api/corp/${corporateId}/invite/${pendingAdminId}`);
  return {
    adminId
  };
}
/**
 * Remove pending employee
 * @param {Object} action 
 * @returns {Object}
 */


async function removePendingEmployee(action) {
  const {
    corporateId,
    pendingEmployeeId
  } = action;
  await _apiFetch.default.remove(`/api/corp/${corporateId}/invite/${pendingEmployeeId}`);
  return {
    pendingEmployeeId
  };
}
/**
 * Add corporate event
 * @param {Object} action 
 * @returns {Object}
 */


async function addEvent(action) {
  const {
    corporateId,
    name
  } = action;
  const {
    corpEventId
  } = await _apiFetch.default.post(`/api/corp/${corporateId}/event`, {
    what: name
  });
  const event = {
    _id: corpEventId,
    what: name
  };
  return {
    event
  };
}

var _default = {
  [CORPORATE_ADD_ADMIN]: addAdmin,
  [CORPORATE_ADD_EMPLOYEE]: addEmployee,
  [CORPORATE_REMOVE_ADMIN]: removeAdmin,
  [CORPORATE_REMOVE_EMPLOYEE]: removeEmployee,
  [CORPORATE_REMOVE_PENDING_ADMIN]: removePendingAdmin,
  [CORPORATE_REMOVE_PENDING_EMPLOYEE]: removePendingEmployee,
  [CORPORATE_ADD_EVENT]: addEvent
};
exports.default = _default;