"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

var _apiFetch = _interopRequireDefault(require("../services/api-fetch"));

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
 * Log in
 * @param {Object} action
 * @returns {Object}
 */

async function login(action) {
  const {
    userName,
    password
  } = action;

  if (typeof window !== 'undefined') {
    if (window.localStorage) {
      window.localStorage.clear();
    }
  }

  const {
    token
  } = await _apiFetch.default.postAnonymous('/api/auth/login', {
    userName,
    password
  });

  if (typeof window !== 'undefined') {
    document.cookie = `token=${token}`;
  }

  return {
    token
  };
}
/**
 * Sign up
 * @param {Object} action
 * @returns {Object}
 */


async function signup(action) {
  const {
    userName,
    email,
    password,
    notifyMe
  } = action;

  if (typeof window !== 'undefined') {
    if (window.localStorage) {
      window.localStorage.clear();
    }
  }

  const {
    token
  } = await _apiFetch.default.postAnonymous('/api/auth/register', {
    userName,
    email,
    password,
    notify_me: notifyMe
  });

  if (typeof window !== 'undefined') {
    document.cookie = `token=${token}`;
  }

  return {
    token
  };
}
/**
 * Log out
 * @param {Object} action
 * @returns {Object}
 */


async function logout(action) {
  if (typeof window !== 'undefined') {
    if (window.localStorage) {
      window.localStorage.clear();
    }
  }

  return {};
}
/**
 * Accept connection to consult
 * @param {Object} action
 * @returns {Object}
 */


async function acceptConnection(action) {
  const {
    connectionId
  } = action;
  const {
    user
  } = await _apiFetch.default.post('/api/connect/approve', {
    connectionProposalId: connectionId
  });
  return {
    connectionId,
    user
  };
}
/**
 * Reject connection to consult
 * @param {Object} action
 * @returns {Object}
 */


async function rejectConnection(action) {
  const {
    connectionId
  } = action;
  await _apiFetch.default.post('/api/connect/decline', {
    connectionProposalId: connectionId
  });
  return {
    connectionId
  };
}
/**
 * Remove connection from consult
 * @param {Object} action
 * @returns {Object}
 */


async function removeConnection(action) {
  const {
    consultId
  } = action;
  await _apiFetch.default.remove('/api/connect/from/consult', {
    userId: consultId
  });
  return {
    consultId
  };
}
/**
 * Change profile
 * @param {Object} action
 * @returns {Object}
 */


async function changeProfile(action) {
  const {
    firstName,
    lastName,
    email
  } = action;
  await _apiFetch.default.patch('/api/user', {
    firstName,
    lastName,
    email
  });
  return {
    firstName,
    lastName,
    email
  };
}
/**
 * Change single detail on profile
 * @param {Object} action
 * @returns {Object}
 */


async function changeProfileDetail(action, dispatch) {
  const {
    detail,
    value
  } = action;
  await _apiFetch.default.patch('/api/user', {
    [detail]: value
  });
  return {
    detail,
    value
  };
}

var _default = {
  [AUTH_LOGIN]: login,
  [AUTH_LOGOUT]: logout,
  [AUTH_SIGNUP]: signup,
  [AUTH_ACCEPT_CONNECTION]: acceptConnection,
  [AUTH_REJECT_CONNECTION]: rejectConnection,
  [AUTH_REMOVE_CONNECTION]: removeConnection,
  [AUTH_CHANGE_PROFILE]: changeProfile,
  [AUTH_CHANGE_PROFILE_DETAIL]: changeProfileDetail
};
exports.default = _default;