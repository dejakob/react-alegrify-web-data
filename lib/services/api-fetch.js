"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper around fetch to handle Alegrify API
 */
class ApiFetch {
  /**
   * GET ajax request
   * @param {String} url 
   * @returns {Promise.<Object>}
   */
  static async get(url) {
    const {
      token
    } = _store.default.getState();

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    });
    const jsonResponse = await response.json();

    if (response.status >= 400) {
      throw jsonResponse;
    }

    return jsonResponse;
  }
  /**
   * GET anonymous ajax request
   * @param {String} url 
   * @returns {Promise.<Object>}
   */


  static async get(url) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    const jsonResponse = await response.json();

    if (response.status >= 400) {
      throw jsonResponse;
    }

    return jsonResponse;
  }
  /**
   * POST ajax request
   * @param {String} url 
   * @param {Object} params 
   * @returns {Promise.<Object>}
   */


  static async post(url, params) {
    const {
      token
    } = _store.default.getState();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(params)
    });
    const jsonResponse = await response.json();

    if (response.status >= 400) {
      throw jsonResponse;
    }

    return jsonResponse;
  }
  /**
   * POST anonymous ajax request
   * @param {String} url 
   * @param {Object} params 
   * @returns {Promise.<Object>}
   */


  static async postAnonymous(url, params) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    const jsonResponse = await response.json();

    if (response.status >= 400) {
      throw jsonResponse;
    }

    return jsonResponse;
  }
  /**
   * POST file over ajax
   * @param {String} url 
   * @param {Object} formData 
   * @returns {Promise.<Object>}
   */


  static async postFile(url, formData) {
    const {
      token
    } = _store.default.getState();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${token}`
      },
      body: formData
    });
    const jsonResponse = await response.json();

    if (response.status >= 400) {
      throw jsonResponse;
    }

    return jsonResponse;
  }
  /**
   * PATCH ajax request
   * @param {String} url 
   * @param {Object} params 
   * @returns {Promise.<Object>}
   */


  static async patch(url, params) {
    const {
      token
    } = _store.default.getState();

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(params)
    });
    const jsonResponse = await response.json();

    if (response.status >= 400) {
      throw jsonResponse;
    }

    return jsonResponse;
  }
  /**
   * DELETE ajax request
   * @param {String} url 
   * @param {Object} params 
   * @returns {Promise.<Object>}
   */


  static async remove(url, params = {}) {
    const {
      token
    } = _store.default.getState();

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(params)
    });
    const jsonResponse = await response.json();

    if (response.status >= 400) {
      throw jsonResponse;
    }

    return jsonResponse;
  }

}

var _default = ApiFetch;
exports.default = _default;