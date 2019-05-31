"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAdmin = addAdmin;
exports.addEmployee = addEmployee;
exports.removeAdmin = removeAdmin;
exports.removeEmployee = removeEmployee;
exports.removePendingAdmin = removePendingAdmin;
exports.removePendingEmployee = removePendingEmployee;
exports.addEvent = addEvent;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

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
 * @param {String} corporateId
 * @param {String} email 
 * @returns {Object}
 */

function addAdmin(corporateId, email) {
  return {
    type: CORPORATE_ADD_ADMIN,
    corporateId,
    email
  };
}
/**
 * Add employee
 * @param {String} corporateId
 * @param {String} email 
 * @returns {Object}
 */


function addEmployee(corporateId, email) {
  return {
    type: CORPORATE_ADD_EMPLOYEE,
    corporateId,
    email
  };
}
/**
 * Remove admin
 * @param {String} corporateId
 * @param {String} adminId
 * @returns {Object}
 */


function removeAdmin(corporateId, adminId) {
  return {
    type: CORPORATE_REMOVE_ADMIN,
    corporateId,
    adminId
  };
}
/**
 * Remove employee
 * @param {String} corporateId
 * @param {String} employeeId
 * @returns {Object}
 */


function removeEmployee(corporateId, employeeId) {
  return {
    type: CORPORATE_REMOVE_EMPLOYEE,
    corporateId,
    employeeId
  };
}
/**
 * Remove pending admin
 * @param {String} corporateId
 * @param {String} pendingAdminId
 * @returns {Object}
 */


function removePendingAdmin(corporateId, pendingAdminId) {
  return {
    type: CORPORATE_REMOVE_PENDING_ADMIN,
    corporateId,
    pendingAdminId
  };
}
/**
 * Remove pending employee id
 * @param {String} corporateId 
 * @param {String} pendingEmployeeId 
 * @returns {Object}
 */


function removePendingEmployee(corporateId, pendingEmployeeId) {
  return {
    type: CORPORATE_REMOVE_PENDING_EMPLOYEE,
    corporateId,
    pendingEmployeeId
  };
}
/**
 * Add corporate event
 * @param {String} corporateId
 * @param {String} name
 * @returns {Object}
 */


function addEvent(corporateId, name) {
  return {
    type: CORPORATE_ADD_EVENT,
    corporateId,
    name
  };
}