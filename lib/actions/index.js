"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var authActions = _interopRequireWildcard(require("./auth"));

var corporateActions = _interopRequireWildcard(require("./corporate"));

var crisisActions = _interopRequireWildcard(require("./crisis"));

var dashboardActions = _interopRequireWildcard(require("./dashboard"));

var landingActions = _interopRequireWildcard(require("./landing"));

var navigationActions = _interopRequireWildcard(require("./navigation"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  auth: authActions,
  corporate: corporateActions,
  crisis: crisisActions,
  dashboard: dashboardActions,
  landing: landingActions,
  navigation: navigationActions
};
exports.default = _default;