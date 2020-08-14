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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/addClassOnWindowChange.js":
/*!**********************************************!*\
  !*** ./js/modules/addClassOnWindowChange.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addClassOnWindowChange(width, activeClass, ...elems) {
    if (window.innerWidth <= width) {
        elems.forEach(elem => {
            document.querySelector(elem).classList.add(activeClass);
        });
    } else {
        elems.forEach(elem => {
            document.querySelector(elem).classList.remove(activeClass);
        });
    }

    window.addEventListener('resize', (e) => {
        e.preventDefault();
        if (window.innerWidth <= width) {
            elems.forEach(elem => {
                document.querySelector(elem).classList.add(activeClass);
            });
        } else {
            elems.forEach(elem => {
                document.querySelector(elem).classList.remove(activeClass);
            });
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (addClassOnWindowChange);

/***/ }),

/***/ "./js/modules/addFunctionOnWindowChange.js":
/*!*************************************************!*\
  !*** ./js/modules/addFunctionOnWindowChange.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addFunctionOnWindowChange(width, positiveCallback, negativeCallback) {
    if (window.innerWidth <= width) {
        positiveCallback();
    } else {
        negativeCallback();
    }

    window.addEventListener('resize', (e) => {
        e.preventDefault();
        if (window.innerWidth <= width) {
            positiveCallback();
        } else {
            negativeCallback();
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (addFunctionOnWindowChange);

/***/ }),

/***/ "./js/modules/removeClassOnWindowChange.js":
/*!*************************************************!*\
  !*** ./js/modules/removeClassOnWindowChange.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeClassOnWindowChange(width, activeClass, ...elems) {
    if (window.innerWidth <= width) {
        elems.forEach(elem => {
            document.querySelector(elem).classList.remove(activeClass);
        });
    } else {
        elems.forEach(elem => {
            document.querySelector(elem).classList.add(activeClass);
        });
    }

    window.addEventListener('resize', (e) => {
        e.preventDefault();
        if (window.innerWidth <= width) {
            elems.forEach(elem => {
                document.querySelector(elem).classList.remove(activeClass);
            });
        } else {
            elems.forEach(elem => {
                document.querySelector(elem).classList.add(activeClass);
            });
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (removeClassOnWindowChange);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addClassOnWindowChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addClassOnWindowChange */ "./js/modules/addClassOnWindowChange.js");
/* harmony import */ var _modules_addFunctionOnWindowChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addFunctionOnWindowChange */ "./js/modules/addFunctionOnWindowChange.js");
/* harmony import */ var _modules_removeClassOnWindowChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/removeClassOnWindowChange */ "./js/modules/removeClassOnWindowChange.js");




window.addEventListener('DOMContentLoaded', () => {
    const contactInfo = document.querySelector('.contact__info');
    const contact = document.querySelector('.contact .content__part.pt-65.sb');
    const footer = document.querySelector('footer .container');



    Object(_modules_addClassOnWindowChange__WEBPACK_IMPORTED_MODULE_0__["default"])(1160, "center", ".about .content__block", ".home .content__block");
    Object(_modules_addClassOnWindowChange__WEBPACK_IMPORTED_MODULE_0__["default"])(1160, "mt-50", ".about .content__row");
    Object(_modules_addFunctionOnWindowChange__WEBPACK_IMPORTED_MODULE_1__["default"])(1050, () => footer.before(contactInfo), () => contact.append(contactInfo));

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map