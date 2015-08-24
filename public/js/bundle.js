(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var insert = require('insert-css');
var normalize = require('./normalize');

insert(normalize);

},{"./normalize":3,"insert-css":2}],2:[function(require,module,exports){
var inserted = [];

module.exports = function (css) {
    if (inserted.indexOf(css) >= 0) return;
    inserted.push(css);
    
    var elem = document.createElement('style');
    var text = document.createTextNode(css);
    elem.appendChild(text);
    
    if (document.head.childNodes.length) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
    }
    else {
        document.head.appendChild(elem);
    }
};

},{}],3:[function(require,module,exports){
module.exports = "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"

},{}],4:[function(require,module,exports){
var ACE2D = ACE2D || function (canvas, options) {

	this.canvas = new Isomer(canvas, options);
	this.Point = Isomer.Point;
	this.Path = Isomer.Path;
	this.Shape = Isomer.Shape;
	this.Vector = Isomer.Vector;
	this.Color = Isomer.Color;
	this.colors = {
		black: new this.Color(0, 0, 0),
		white: new this.Color(255, 255, 255),
		red: new this.Color(244, 67, 54),
		pink: new this.Color(233, 30, 99),
		purple: new this.Color(156, 39, 176),
		deeppurple: new this.Color(103, 58, 183),
		indigo: new this.Color(63, 81, 181),
		blue: new this.Color(33, 150, 243),
		lightblue: new this.Color(3, 169, 244),
		cyan: new this.Color(0, 188, 212),
		teal: new this.Color(0, 150, 136),
		green: new this.Color(76, 175, 80),
		lightgreen: new this.Color(139, 195, 74),
		lime: new this.Color(205, 220, 57),
		yellow: new this.Color(255, 235, 59),
		amber: new this.Color(255, 193, 7),
		orange: new this.Color(255, 152, 0),
		deeporange: new this.Color(255, 87, 34),
		brown: new this.Color(121, 85, 72),
		grey: new this.Color(158, 158, 158),
		bluegrey: new this.Color(96, 158, 158)
	};

};

ACE2D.prototype.newBox = function (coord, xyz, color, callback) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);
	if (callback) {
		this.canvas.add(box, color);
		callback(this, box);
	} else {
		this.canvas.add(box, color);
	}
};

ACE2D.prototype.init = function (shape) {
	var paths = shape.orderedPaths();
	    for (var i in paths) {
	      if (paths.hasOwnProperty(i)) {
	      	console.log(paths[i]);
	        _addPath(paths[i]);
	      }
	    }
};

ACE2D.prototype.pointIt = function (shape) {
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");
	var TRANSFORMATION = [];
	var SCALE = this.canvas.scale;
	var ANGLE = this.canvas.angle;
	var originX = this.canvas.originX;
	var originY = this.canvas.originY;

	var Point = Isomer.Point;
	var Path = Isomer.Path;
	var Shape = Isomer.Shape;
	var Vector = Isomer.Vector;

	function init (shape) {
		var paths = shape.orderedPaths();
	    for (var i in paths) {
	      if (paths.hasOwnProperty(i)) {
	      	console.log(paths[i]);
	        _addPath(paths[i]);
	      }
	    }
	}

	function orderedPaths (shape) {
		var paths = shape.slice();

		/**
		* Sort the list of faces by distance then map the entries, returning
		* only the path and not the added "further point" from earlier.
		*/

		return paths.sort(function (pathA, pathB) {
			return depth(pathB) - depth(pathA);
		});
	}

	function depth (path) {
		var i, total = 0;
		for (i = 0; i < path.length; i++) {
			total += depth(path[i]);
	  	}

	  	return total / (path.length || 1);
	}

	function _addPath (path) {
		path.points.map(function (i) {
			console.log(i)
		});
		path.points.map(_translatePoint);
	}

	function _calculateTransformation () {
	  TRANSFORMATION = [
	    [
	      SCALE * Math.cos(ANGLE),
	      SCALE * Math.sin(ANGLE)
	    ],
	    [
	      SCALE * Math.cos(Math.PI - ANGLE),
	      SCALE * Math.sin(Math.PI - ANGLE)
	    ]
	  ];
	}

	function _translatePoint (point) {
		var xMap = new Point(
			point.x * TRANSFORMATION[0][0],
			point.x * TRANSFORMATION[0][1]);

		var yMap = new Point(
	  		point.y * TRANSFORMATION[1][0],
	  		point.y * TRANSFORMATION[1][1]);

		var x = originX + xMap.x + yMap.x;
		var y = originY - xMap.y - yMap.y - (point.z * SCALE);

		var x4K = 3840;
		var y4K = 2160;
		var xNot = 1366;
		var yNot = 768;

		var xDoMouse = x4K - xNot - x;
		var yDoMouse = y4K - yNot - y;

		console.log('x: ' + x);
		console.log('y: ' + y);

		ctx.beginPath();
		ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
		ctx.fillStyle = "#FF00E1";
		ctx.font = '10px Roboto';
		ctx.fillText('x: ' + parseInt(x), x, y);
		ctx.fillText('y: ' + parseInt(y), x, y + 10);
		ctx.fill();
		ctx.stroke();
		//ctx.fillRect(x, y, 12, 12);

		//return new Point(x, y);
	}

	_calculateTransformation();
	init(shape);
}

module.exports = ACE2D;

},{}],5:[function(require,module,exports){
var normalize = require('normalize-css');
var ACE2D = require('./ACE2D');

var canvas = document.querySelector('canvas');
var inWidth = window.innerWidth;
var inHeight = window.innerHeight;

var MundoSenai = new ACE2D(canvas, {
	scale: 15,
	originY: 450
});

// Chão
MundoSenai.newBox([0, 0, 0], [30, 25, 0.5], MundoSenai.colors.grey);

// Salas da Direita
MundoSenai.newBox([24, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, function (ACE2D, box) {
	ACE2D.pointIt(box);
});
MundoSenai.newBox([20, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, function (ACE2D, box) {
	ACE2D.pointIt(box);
});
MundoSenai.newBox([16, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, function (ACE2D, box) {
	ACE2D.pointIt(box);
});
MundoSenai.newBox([12, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, function (ACE2D, box) {
	ACE2D.pointIt(box);
});
MundoSenai.newBox([8, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, function (ACE2D, box) {
	ACE2D.pointIt(box);
});
MundoSenai.newBox([4, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, function (ACE2D, box) {
	ACE2D.pointIt(box);
});

// Portas da Direita
MundoSenai.newBox([24.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox([20.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox([16.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox([12.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox([8.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox([4.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);

// Salas da Direita
MundoSenai.newBox([24, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox([20, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox([16, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox([12, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox([8, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox([4, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);


mouseCoords();

function mouseCoords () {
	document.addEventListener('mousemove', function (e) {
	var x4K = 3840;
	var y4K = 2160;
	var xNot = 1366;
	var yNot = 768;

	var x = e.pageX;
	var y = e.pageY;

	var xCanvas = (x4K - xNot - x);
	var yCanvas = (y4K - yNot - y);

	console.log('Mouse Position: x: ' + x + ' - y: ' + y);
});
}

//console.log(canvas);

/*
*
*	Tests with ACE3D :P
*
*/
/*
var ACE3D = require('./ACE3D');

var MundoSenai = new ACE3D();

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var VIEW_ANGLE = 70;
var ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
var NEAR = 1;
var FAR = 10000;

MundoSenai.helpers = require('./helpers');

MundoSenai.newScene();

MundoSenai.newCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

MundoSenai.newLight();

MundoSenai.render(SCREEN_WIDTH, SCREEN_HEIGHT);

MundoSenai.callback(function () {
	// Adiciona os controles
	MundoSenai.helpers.addControls(MundoSenai);

	// Cria a caixinha de teste
	MundoSenai.helpers.createBox(MundoSenai.scene);

	// Anima os frames c:
	function animate () {
		requestAnimationFrame(animate);
		MundoSenai.renderer.render(MundoSenai.scene, MundoSenai.camera);
		MundoSenai.controls.update();
	}

	animate();

	window.addEventListener('resize', function () {
		MundoSenai.helpers.onWindowResize(MundoSenai);
	}, false);
});
*/

},{"./ACE2D":4,"normalize-css":1}]},{},[5]);
