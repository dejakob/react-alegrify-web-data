"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let APP_DATA = {};

if (typeof window === 'object' && typeof window.localStorage === 'object' && window.localStorage !== null && typeof window.localStorage.getItem === 'function') {
  try {
    const localStorageData = JSON.parse(window.localStorage.getItem('app_state'));

    if (typeof localStorageData === 'object' && localStorageData !== null) {
      APP_DATA = { ...APP_DATA,
        ...localStorageData
      };
    }
  } catch (ex) {}
}

if (typeof window === 'object' && typeof window.server_app_state === 'object' && window.server_app_state !== null) {
  APP_DATA = { ...APP_DATA,
    ...window.server_app_state
  };
}

var _default = APP_DATA;
exports.default = _default;