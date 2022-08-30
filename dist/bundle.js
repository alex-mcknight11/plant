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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This function stores our state.\n\nconst storeState = () => {\n  let currentState = {};\n  return (stateChangeFunction = state => state) => {\n    const newState = stateChangeFunction(currentState);\n    currentState = {...newState};\n    return newState;\n  };\n};\n\nconst stateControl = storeState();\n\n// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.\n\nconst changeState = (prop) => {\n  return (value) => {\n    return (state) => ({\n      ...state,\n      [prop] : (state[prop] || 0) + value\n    });\n  };\n};\n\n// We create four functions using our function factory. We could easily create many more.\n\nconst feed = changeState(\"soil\")(1);\nconst blueFood = changeState(\"soil\")(5);\n\nconst hydrate = changeState(\"water\")(1);\nconst superWater = changeState(\"water\")(5);\n\nconst giveLight = changeState(\"light\")(1);\nconst superLight = changeState(\"light\")(5);\n\n$(document).ready(function() {\n  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.\n  // +1\n  $('#feed').click(function() {\n    const newState = stateControl(feed);\n    $('#soil-value').text(`Soil: ${newState.soil}`);\n  });\n  //+5\n  $('#feedBlueFood').click(function() {\n    const newState = stateControl(blueFood);\n    $('#soil-value').text(`Soil: ${newState.soil}`);\n  });\n  //+1\n  $('#hydrate').click(function() {\n    const newState = stateControl(hydrate);\n    $('#water-value').text(`Water: ${newState.water}`);\n  });\n  //+5\n  $('#hydrateSuperWater').click(function() {\n    const newState = stateControl(superWater);\n    $('#water-value').text(`Water: ${newState.water}`);\n  });\n  //+1\n  $('#giveLight').click(function() {\n    const newState = stateControl(giveLight);\n    $('#light-value').text(`Light: ${newState.light}`);\n  });\n  //+5\n  $('#giveSuperLight').click(function() {\n    const newState = stateControl(superLight);\n    $('#light-value').text(`Light: ${newState.light}`);\n  });\n\n  // This function doesn't actually do anything useful in this application — it just demonstrates how we can \"look\" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.\n\n  $('#show-state').click(function() {\n    // We just need to call stateControl() without arguments to see our current state.\n    const currentState = stateControl();\n    $('#soil-value').text(`Soil: ${currentState.soil}`);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ZTFlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTtBQUNwRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGVBQWU7QUFDcEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BELEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRCxHQUFHO0FBQ0gsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZnVuY3Rpb24gc3RvcmVzIG91ciBzdGF0ZS5cblxuY29uc3Qgc3RvcmVTdGF0ZSA9ICgpID0+IHtcbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IHt9O1xuICByZXR1cm4gKHN0YXRlQ2hhbmdlRnVuY3Rpb24gPSBzdGF0ZSA9PiBzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gc3RhdGVDaGFuZ2VGdW5jdGlvbihjdXJyZW50U3RhdGUpO1xuICAgIGN1cnJlbnRTdGF0ZSA9IHsuLi5uZXdTdGF0ZX07XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xufTtcblxuY29uc3Qgc3RhdGVDb250cm9sID0gc3RvcmVTdGF0ZSgpO1xuXG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gZmFjdG9yeS4gV2UgY2FuIGVhc2lseSBjcmVhdGUgbW9yZSBzcGVjaWZpYyBmdW5jdGlvbnMgdGhhdCBhbHRlciBhIHBsYW50J3Mgc29pbCwgd2F0ZXIsIGFuZCBsaWdodCB0byB2YXJ5aW5nIGRlZ3JlZXMuXG5cbmNvbnN0IGNoYW5nZVN0YXRlID0gKHByb3ApID0+IHtcbiAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAoc3RhdGUpID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFtwcm9wXSA6IChzdGF0ZVtwcm9wXSB8fCAwKSArIHZhbHVlXG4gICAgfSk7XG4gIH07XG59O1xuXG4vLyBXZSBjcmVhdGUgZm91ciBmdW5jdGlvbnMgdXNpbmcgb3VyIGZ1bmN0aW9uIGZhY3RvcnkuIFdlIGNvdWxkIGVhc2lseSBjcmVhdGUgbWFueSBtb3JlLlxuXG5jb25zdCBmZWVkID0gY2hhbmdlU3RhdGUoXCJzb2lsXCIpKDEpO1xuY29uc3QgYmx1ZUZvb2QgPSBjaGFuZ2VTdGF0ZShcInNvaWxcIikoNSk7XG5cbmNvbnN0IGh5ZHJhdGUgPSBjaGFuZ2VTdGF0ZShcIndhdGVyXCIpKDEpO1xuY29uc3Qgc3VwZXJXYXRlciA9IGNoYW5nZVN0YXRlKFwid2F0ZXJcIikoNSk7XG5cbmNvbnN0IGdpdmVMaWdodCA9IGNoYW5nZVN0YXRlKFwibGlnaHRcIikoMSk7XG5jb25zdCBzdXBlckxpZ2h0ID0gY2hhbmdlU3RhdGUoXCJsaWdodFwiKSg1KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gaGFzIHNpZGUgZWZmZWN0cyBiZWNhdXNlIHdlIGFyZSB1c2luZyBqUXVlcnkuIE1hbmlwdWxhdGluZyB0aGUgRE9NIHdpbGwgYWx3YXlzIGJlIGEgc2lkZSBlZmZlY3QuIE5vdGUgdGhhdCB3ZSBvbmx5IHVzZSBvbmUgb2Ygb3VyIGZ1bmN0aW9ucyB0byBhbHRlciBzb2lsLiBZb3UgY2FuIGVhc2lseSBhZGQgbW9yZS5cbiAgLy8gKzFcbiAgJCgnI2ZlZWQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlQ29udHJvbChmZWVkKTtcbiAgICAkKCcjc29pbC12YWx1ZScpLnRleHQoYFNvaWw6ICR7bmV3U3RhdGUuc29pbH1gKTtcbiAgfSk7XG4gIC8vKzVcbiAgJCgnI2ZlZWRCbHVlRm9vZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gc3RhdGVDb250cm9sKGJsdWVGb29kKTtcbiAgICAkKCcjc29pbC12YWx1ZScpLnRleHQoYFNvaWw6ICR7bmV3U3RhdGUuc29pbH1gKTtcbiAgfSk7XG4gIC8vKzFcbiAgJCgnI2h5ZHJhdGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlQ29udHJvbChoeWRyYXRlKTtcbiAgICAkKCcjd2F0ZXItdmFsdWUnKS50ZXh0KGBXYXRlcjogJHtuZXdTdGF0ZS53YXRlcn1gKTtcbiAgfSk7XG4gIC8vKzVcbiAgJCgnI2h5ZHJhdGVTdXBlcldhdGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZUNvbnRyb2woc3VwZXJXYXRlcik7XG4gICAgJCgnI3dhdGVyLXZhbHVlJykudGV4dChgV2F0ZXI6ICR7bmV3U3RhdGUud2F0ZXJ9YCk7XG4gIH0pO1xuICAvLysxXG4gICQoJyNnaXZlTGlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlQ29udHJvbChnaXZlTGlnaHQpO1xuICAgICQoJyNsaWdodC12YWx1ZScpLnRleHQoYExpZ2h0OiAke25ld1N0YXRlLmxpZ2h0fWApO1xuICB9KTtcbiAgLy8rNVxuICAkKCcjZ2l2ZVN1cGVyTGlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlQ29udHJvbChzdXBlckxpZ2h0KTtcbiAgICAkKCcjbGlnaHQtdmFsdWUnKS50ZXh0KGBMaWdodDogJHtuZXdTdGF0ZS5saWdodH1gKTtcbiAgfSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFjdHVhbGx5IGRvIGFueXRoaW5nIHVzZWZ1bCBpbiB0aGlzIGFwcGxpY2F0aW9uIOKAlCBpdCBqdXN0IGRlbW9uc3RyYXRlcyBob3cgd2UgY2FuIFwibG9va1wiIGF0IHRoZSBjdXJyZW50IHN0YXRlICh3aGljaCB0aGUgRE9NIGlzIGhvbGRpbmcgYW55d2F5KS4gSG93ZXZlciwgc3R1ZGVudHMgb2Z0ZW4gZG8gbmVlZCB0aGUgYWJpbGl0eSB0byBzZWUgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aG91dCBjaGFuZ2luZyBpdCBzbyBpdCdzIGluY2x1ZGVkIGhlcmUgZm9yIHJlZmVyZW5jZS5cblxuICAkKCcjc2hvdy1zdGF0ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIC8vIFdlIGp1c3QgbmVlZCB0byBjYWxsIHN0YXRlQ29udHJvbCgpIHdpdGhvdXQgYXJndW1lbnRzIHRvIHNlZSBvdXIgY3VycmVudCBzdGF0ZS5cbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBzdGF0ZUNvbnRyb2woKTtcbiAgICAkKCcjc29pbC12YWx1ZScpLnRleHQoYFNvaWw6ICR7Y3VycmVudFN0YXRlLnNvaWx9YCk7XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });