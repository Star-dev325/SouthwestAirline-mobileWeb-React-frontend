this["mwebAppConfig"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  CHAPI_MISC: '/api/mobile-misc/',
  CHAPI_AIR_OPERATIONS: '/api/mobile-air-operations/',
  CHAPI_AIR_BOOKING: '/api/mobile-air-booking/',
  CHAPI_AIR_SHOPPING: '/api/mobile-air-shopping/',
  SECURITY_API: '/api/security/',
  LOGGING_API: '/api/logging/',
  OAUTH_CLIENT_ID_COOKIE: 'f4ec02cf-4369-4bde-b878-b7f85d3e8b31',
  OAUTH_CLIENT_ID_CORPORATE: '35f40246-7eb0-40fa-b2df-eb1270917fe2',
  OAUTH_CLIENT_ID_CORPORATE_COOKIE: '874d8252-a31a-4637-93cd-87697d9548ed',
  CONTENT_API: '/api/content-delivery/',
  LUV_API: 'https://luv.southwest.com',
  CAR_API: '/api/car-reservations/',
  API_KEY: 'l7xx40af0df5888548f39a3b691acb4d13db',
  IOS_API_KEY: 'l7xx45d48a575e294003b62377aae1ec136d',
  IOS_API_CHANNEL: 'IOS',
  IOS_API_CORPORATE_CHANNEL: 'IOS_CORP',
  ANALYTICS_URL: '/content/app/scripts/analytics/analytics.js',
  USER_CAN_CHANGE_TOGGLES: true,
  BRANCH_KEY: 'key_test_kiCmZHbV9GYaXUX4au1dMeoewweY08T9',
  API_GATEWAY_CHASE_API: '/api/chase/',
  PAYPAL_WEBVIEW_ENV: 'https://mobile.qa4.southwest.com/',
  PAYPAL_WEBVIEW_CANCEL_URL: 'redirect/hybrid/paypal/cancel',
  PAYPAL_WEBVIEW_RETURN_URL: 'redirect/hybrid/paypal/success',
  SWA_VACATIONS_URL: 'https://res.southwestvacations.com/search/ExternalFormPost.aspx?cmpid=SWA-INPATH',
  CEPTOR_SITE: 'mobile.qa4.southwest.com',
  CEPTOR_ENV: 'dev',
  CHATBOT_BASE_LIVE_AGENT_CONTENT_URL: 'https://c.la1-c1cs-iad.salesforceliveagent.com/content',
  CHATBOT_BASE_LIVE_AGENT_URL: 'https://d.la1-c1cs-iad.salesforceliveagent.com/chat',
  CHATBOT_BUTTON_ID: '5730v0000004Dtl',
  CHATBOT_DEPLOYMENT_ID: '5720v0000004DXv',
  CHATBOT_ESW_LIVE_AGENT_DEV_NAME: 'EmbeddedServiceLiveAgent_Parent04I0v0000008OUzEAM_1754bf9c45e',
  CHATBOT_ORG_ENDPOINT: 'https://config4-swacssinternal.cs66.force.com/connect',
  CHATBOT_ORG_URL: 'https://swac360--config4.my.salesforce.com',
  CHATBOT_ORG_ID: '00D0v000000E32k',
  CHATBOT_EMBEDDED_WINDOW_URL: 'https://swac360--config4.my.salesforce.com/embeddedservice/5.0/esw.min.js'
};

/***/ })

/******/ });
//# sourceMappingURL=config.js.map