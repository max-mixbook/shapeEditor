/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// This is the entry point for React to update the DOM
	"use strict";
	// Non redux render. This works.
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var App_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(App_1.App, {author: "Max"}), document.getElementById("react"));
	/* Redux render. Not working yet.
	import * as React from "react";
	import * as ReactDOM from "react-dom";
	import { Provider } from 'react-redux';
	import { createStore } from 'redux';
	import todoApp from './reducers';
	import { Canvas } from "./components/canvas";
	
	let store = createStore(todoApp)
	
	ReactDOM.render (
	    <Provider store={store}>
	        <App author="Max" />
	    </Provider>,
	    document.getElementById("react")
	);
	*/


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// This is the actual app. It hold the palette and canvas
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Canvas_1 = __webpack_require__(4);
	var Palette_1 = __webpack_require__(5);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(Canvas_1.Canvas, null), React.createElement(Palette_1.Palette, null));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// This component is the the canvas drop target for the shapes
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Canvas = (function (_super) {
	    __extends(Canvas, _super);
	    function Canvas() {
	        _super.apply(this, arguments);
	    }
	    Canvas.prototype.render = function () {
	        return React.createElement("div", {className: "canvas"});
	    };
	    return Canvas;
	}(React.Component));
	exports.Canvas = Canvas;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// This component holds the shapes
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Shape_1 = __webpack_require__(6);
	var Palette = (function (_super) {
	    __extends(Palette, _super);
	    function Palette() {
	        _super.apply(this, arguments);
	    }
	    Palette.prototype.render = function () {
	        return React.createElement("div", {className: "palette"}, React.createElement("div", {className: "shape-wrapper"}, React.createElement(Shape_1.Shape, {kind: "square"}, React.createElement("svg", {width: "80px", height: "80px", viewBox: "0 0 80 80", version: "1.1", xmlns: "http://www.w3.org/2000/svg"}, React.createElement("defs", null), React.createElement("rect", {id: "Rectangle-85", stroke: "none", fill: "#465659", "fill-rule": "evenodd", x: "0", y: "0", width: "80", height: "80"}))), React.createElement(Shape_1.Shape, {kind: "triangle"}, React.createElement("svg", {width: "100px", height: "80px", viewBox: "0 0 100 80", version: "1.1", xmlns: "http://www.w3.org/2000/svg"}, React.createElement("defs", null), React.createElement("polygon", {id: "canvas", stroke: "none", fill: "#465659", "fill-rule": "evenodd", points: "50 0 100 80 0 80"}))), React.createElement(Shape_1.Shape, {kind: "circle"}, React.createElement("svg", {width: "80px", height: "80px", viewBox: "0 0 80 80", version: "1.1", xmlns: "http://www.w3.org/2000/svg"}, React.createElement("defs", null), React.createElement("circle", {id: "Oval-10", stroke: "none", fill: "#465659", "fill-rule": "evenodd", cx: "40", cy: "40", r: "40"}))), React.createElement(Shape_1.Shape, {kind: "star"}, React.createElement("svg", {width: "80px", height: "80px", viewBox: "0 0 80 80", version: "1.1", xmlns: "http://www.w3.org/2000/svg"}, React.createElement("defs", null), React.createElement("polygon", {id: "Star-4", stroke: "none", fill: "#465659", "fill-rule": "evenodd", points: "40 60 16.4885899 72.3606798 20.9788697 46.1803399 1.95773935 27.6393202 28.244295 23.8196601 40 0 51.755705 23.8196601 78.0422607 27.6393202 59.0211303 46.1803399 63.5114101 72.3606798"})))));
	    };
	    return Palette;
	}(React.Component));
	exports.Palette = Palette;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// This component is the draggable shape
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Shape = (function (_super) {
	    __extends(Shape, _super);
	    function Shape() {
	        _super.apply(this, arguments);
	    }
	    Shape.prototype.render = function () {
	        return React.createElement("div", {className: "shape", kind: this.props.kind}, this.props.children);
	    };
	    return Shape;
	}(React.Component));
	exports.Shape = Shape;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map