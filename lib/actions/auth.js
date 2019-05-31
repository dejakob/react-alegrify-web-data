"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.signup = signup;
exports.acceptConnection = acceptConnection;
exports.rejectConnection = rejectConnection;
exports.removeConnection = removeConnection;
exports.changeProfile = changeProfile;
exports.changeProfileDetail = changeProfileDetail;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  AUTH_LOGIN,
  AUTH_SIGNUP,
  AUTH_LOGOUT,
  AUTH_ACCEPT_CONNECTION,
  AUTH_REJECT_CONNECTION,
  AUTH_REMOVE_CONNECTION,
  AUTH_CHANGE_PROFILE,
  AUTH_CHANGE_PROFILE_DETAIL
} = _actionNames.default;
/**
 * Log in action
 * @param {String} userName 
 * @param {String} password
 * @returns {Object}
 */

function login(userName, password) {
  return {
    type: AUTH_LOGIN,
    userName,
    password
  };
}
/**
 * Sign up action
 * @param {String} userName 
 * @param {String} email 
 * @param {String} password 
 * @param {Boolean} notifyMe 
 * @returns {Object}
 */


function signup(userName, email, password, notifyMe) {
  return {
    type: AUTH_SIGNUP,
    userName,
    email,
    password,
    notifyMe
  };
}
/**
 * Log out action
 * @returns {Object}
 */


function logout() {
  return {
    type: AUTH_LOGOUT
  };
}
/**
 * Accept connection
 * @param {String} connectionId 
 * @returns {Object}
 */


function acceptConnection(connectionId) {
  return {
    type: AUTH_ACCEPT_CONNECTION,
    connectionId
  };
}
/**
 * Reject connection
 * @param {String} connectionId
 * @returns {Object}
 */


function rejectConnection(connectionId) {
  return {
    type: AUTH_REJECT_CONNECTION,
    connectionId
  };
}
/**
 * Remove connection
 * @param {String} consultId
 * @returns {Object}
 */


function removeConnection(consultId) {
  return {
    type: AUTH_REMOVE_CONNECTION,
    consultId
  };
}
/**
 * Update profile details
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} email
 */


function changeProfile(firstName, lastName, email) {
  return {
    type: AUTH_CHANGE_PROFILE,
    firstName,
    lastName,
    email
  };
}
/**
 * Change one detail of active user profile
 * @param {String} detail 
 * @param {String} value 
 */


function changeProfileDetail(detail, value) {
  return {
    type: AUTH_CHANGE_PROFILE_DETAIL,
    detail,
    value
  };
}