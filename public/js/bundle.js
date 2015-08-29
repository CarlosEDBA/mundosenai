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
var ReverseI = require('./ReverseI');

var ACE2D = ACE2D || function (canvas, options) {

	this.isomer = new Isomer(canvas, options);
	this.canvas = document.querySelector('canvas');
	this.counter = 0;
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

	this.caixinhas = [];
	this.caixinhasLen = this.caixinhas.length;
};

ACE2D.prototype.setCounter = function () {
	this.counter += 1;
	//console.log(this.counter);
};

ACE2D.prototype.getCounter = function () {
	return this.counter;
};

ACE2D.prototype.newBox = function (rotate, coord, xyz, color, setCoords, room, msg, callback) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);
	var coords;

	if (!rotate) { // Esquerda
		if (callback) {
			this.isomer.add(box, color);
			callback(this, box);
		} else {
			this.isomer.add(box, color);
		}
	} else if (rotate) { // Direita
		if (callback) {
			this.isomer.add(box
				.rotateX(this.Point(rotate[0][1], rotate[0][1], rotate[0][1]), rotate[1])
				.rotateY(this.Point(rotate[0][2], rotate[0][2], rotate[0][2]), rotate[1])
				.rotateZ(this.Point(rotate[0][3], rotate[0][3], rotate[0][3]), rotate[1])
			, color);
			callback(this, box);
		} else {
			this.isomer.add(box
				.rotateX(this.Point(rotate[0][1], rotate[0][1], rotate[0][1]), rotate[1])
				.rotateY(this.Point(rotate[0][2], rotate[0][2], rotate[0][2]), rotate[1])
				.rotateZ(this.Point(rotate[0][3], rotate[0][3], rotate[0][3]), rotate[1])
			, color);
		}
	}

	// Grava coordenadas
	if (setCoords) {
		coords = this.setCoords(box);
		// Adiciona Sala
		if (room) {
			var x = [];
			var y = [];	
			var xm = [];
			var ym = [];
			var currentRoom = coords.length - 1;

			//console.log(room);
			//console.log(coords[room][0]);

			coords[currentRoom][0].forEach(function (el, ind, arr) {
				x.push(el.x);
				xm.push(el.xDoMouse);
			});
			coords[currentRoom][1].forEach(function (el, ind, arr) {
				y.push(el.y);
				ym.push(el.yDoMouse);
			});

			if (msg) {
				this.newRoom(room, msg, x, y, xm, ym);
			} else {
				this.newRoom(room, null, x, y, xm, ym);
			}

			this.printRoomNum(room);
		}
	}
};

ACE2D.prototype.setCoords = function (shape) {
	var ReI = new ReverseI(this, this.canvas);
	var ctx = this.canvas.getContext('2d');
	var rect = this.canvas.getBoundingClientRect();

	var faces = [];
	var vertices = [];
	var verticesLen = vertices.length;

	//console.log('Essa é uma caixinha composta de 6 faces de 4 vertices');

	this.caixinhas.push(this.counter);
	this.caixinhasLen = this.counter;

	ReI.setShape(shape);

	ReI.init(function (data) { // Faces
		faces.push(data);
		data.forEach(function (el, ind, arr) { // Vértices

			//vertices.push(el);
			//verticesLen = ind;
			//console.log(el);
			ctx.beginPath();
			ctx.arc(el.x, el.y, 2.5, 0, 1.5 * Math.PI, false);
			ctx.fillStyle = "#212121";
			ctx.font = '8px Roboto';
			ctx.fillText('x: ' + el.xDoMouse, el.x + 5, el.y - 2);
			ctx.fillText('y: ' + el.yDoMouse, el.x + 5, el.y + 6);
			ctx.fill();
			ctx.stroke();
		});
	});

	this.setCounter();

	this.caixinhas[this.caixinhasLen] = faces;

	//console.log(this.caixinhas);
	//console.log(faces);
	//console.log(vertices);

	return this.caixinhas;
}

ACE2D.prototype.newRoom = function (roomNum, msg, x, y, xm, ym) {
	var room = document.createElement('senai-room');
	if (msg) room.dataset.msg = msg;
	room.dataset.room = roomNum;
	room.dataset.x1 = x[0];
	room.dataset.x2 = x[1];
	room.dataset.x3 = x[2];
	room.dataset.x4 = x[3];
	room.dataset.y1 = y[0];
	room.dataset.y2 = y[1];
	room.dataset.y3 = y[2];
	room.dataset.y4 = y[3];
	room.dataset.xm1 = xm[0];
	room.dataset.xm2 = xm[1];
	room.dataset.xm3 = xm[2];
	room.dataset.xm4 = xm[3];
	room.dataset.ym1 = ym[0];
	room.dataset.ym2 = ym[1];
	room.dataset.ym3 = ym[2];
	room.dataset.ym4 = ym[3];
	document.body.appendChild(room);
};

ACE2D.prototype.roomMagic = function () {
	var rooms = document.querySelectorAll('senai-room');
	var roomsLen = rooms.length;
	var that = this;

	this.canvas.addEventListener('mousedown', function (e, ACE2D) {
		letsGo(e, this);
	});

	function letsGo (e, ACE2D) {
		var mouseX = e.x;
		var mouseY = e.y;

		for (var i=0; i<roomsLen; i++) {
			if (
				mouseX > rooms[i].dataset.xm1 &&
				mouseX < rooms[i].dataset.xm3 &&
				mouseY > rooms[i].dataset.ym2 &&
				mouseY < rooms[i].dataset.ym4)
			{
				console.log('Sala: ' + rooms[i].dataset.room + ' - x: ' + mouseX + ' - y: ' + mouseY);
				//console.log(ACE2D);
				that.openModal(rooms[i].dataset.room);
			};
		}
	}
};

ACE2D.prototype.printRoomNum = function (roomNum) {
	var room = document.querySelector('[data-room="' + roomNum + '"]');
	var ctx = this.canvas.getContext('2d');
	var x = parseInt(room.dataset.x1) + 22;
	var y = parseInt(room.dataset.y1) + 4;
	ctx.fillStyle = "#000";
	ctx.font = '12px Roboto';
	ctx.fillText(room.dataset.room, x, y);
	//console.log(room);
};

ACE2D.prototype.openModal = function (room) {
	var modal = document.querySelector('senai-modal');
	modal.setAttribute('room', room);
	modal.setAttribute('state', 'open');
};

ACE2D.prototype.setupModal = function () {
	var modal = document.querySelector('senai-modal');
	var close = document.querySelector('senai-modal /deep/ .close');

	close.addEventListener('click', toggleModal);

	function toggleModal(e) {
		modal.setAttribute('room', '');
		modal.setAttribute('state', '');
	}
};

module.exports = ACE2D;

},{"./ReverseI":6}],5:[function(require,module,exports){
var MundoSenai = MundoSenai || function () {
	var SenaiRoom = document.registerElement('senai-room', { prototype: Object.create(HTMLElement.prototype) });
};

MundoSenai.prototype.mouseCoords = function () {
	document.addEventListener('mousemove', function (e) {
		var x = e.pageX;
		var y = e.pageY;
		console.log('Mouse Position: x: ' + x + ' - y: ' + y);
	});
};

MundoSenai.prototype.changeMap = function () {
	var terreo = document.querySelector('senai-map[name="terreo"]');
	var andar = document.querySelector('senai-map[name="andar"]');
	var updown = document.querySelector('senai-updown');
	var button = document.querySelector('senai-updown .updown');

	button.addEventListener('click', toggleMap);

	function toggleMap (e) {
		var state = updown.getAttribute('state');
		if (state == 'up') {
			terreo.setAttribute('state', '');
			andar.setAttribute('state', 'open');
			updown.setAttribute('state', 'down');
		} else if (state == 'down') {
			terreo.setAttribute('state', 'open');
			andar.setAttribute('state', '');
			updown.setAttribute('state', 'up');
		}
	}
};

module.exports = MundoSenai;

},{}],6:[function(require,module,exports){
var ReverseI = ReverseI || function (ACE2D, canvas) {
	this.ACE2D = ACE2D;
	this.canvas = canvas;
	this.counter = 0;

	this.scale = ACE2D.isomer.scale;
	this.angle = ACE2D.isomer.angle;
	this.originX = ACE2D.isomer.originX;
	this.originY = ACE2D.isomer.originY;
	this.transformation = ACE2D.isomer.transformation;

	this.ReverseShape;

	this.Color = ACE2D.Color;
	this.Path = ACE2D.Path;
	this.Point = ACE2D.Point;
	this.Shape = ACE2D.Shape;
	this.Vector = ACE2D.Vector;
};

ReverseI.prototype.setCounter = function () {
	this.counter += 1;
};

ReverseI.prototype.getCounter = function () {
	return this.counter;
};

ReverseI.prototype.setShape = function (shape) {
	this.ReverseShape = shape;
};

ReverseI.prototype.init = function (callback) {
	var paths = this.ReverseShape.orderedPaths();
	for (var i in paths) {
		if (paths.hasOwnProperty(i)) {
			//console.log(paths[i]);
	        var data = this._addPath(paths[i]);
	        this.setCounter();
	        if (callback) callback(data);
	    }
	}
};

ReverseI.prototype.orderedPaths = function (shape) {
	var paths = shape.slice();

	/**
	* Sort the list of faces by distance then map the entries, returning
	* only the path and not the added "further point" from earlier.
	*/

	return paths.sort(function (pathA, pathB) {
		return depth(pathB) - depth(pathA);
	});
};

ReverseI.prototype.depth = function (path) {
	var i, total = 0;
	for (i = 0; i < path.length; i++) {
		total += depth(path[i]);
	}

	return total / (path.length || 1);
};

ReverseI.prototype._addPath = function (path) {
	return path.points.map(this._translatePoint, this);
};

ReverseI.prototype._calculateTransformation = function () {
	this.transformation = [
		[
			this.scale * Math.cos(this.angle),
			this.scale * Math.sin(this.angle)
	    ],
	    [
			this.scale * Math.cos(Math.PI - this.angle),
			this.scale * Math.sin(Math.PI - this.angle)
	    ]
	];
};

ReverseI.prototype._translatePoint = function (point) {
	var xMap = new this.Point(
			point.x * this.transformation[0][0],
			point.x * this.transformation[0][1]);

		var yMap = new this.Point(
	  		point.y * this.transformation[1][0],
	  		point.y * this.transformation[1][1]);

		var x = this.originX + xMap.x + yMap.x;
		var y = this.originY - xMap.y - yMap.y - (point.z * this.scale);

		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;

		var xDoMouse = ((x * winWidth) / this.canvas.width);
		var yDoMouse = ((y * winHeight) / this.canvas.height);
		//var yDoMouse = ((y * winHeight) / 450) + 150 - this.transformation[0][0];

		/*console.log({
			x: parseInt(x),
			y: parseInt(y),
			xDoMouse: parseInt(xDoMouse),
			yDoMouse: parseInt(yDoMouse)
		});*/

		return {
			x: parseInt(x),
			y: parseInt(y),
			xDoMouse: parseInt(xDoMouse),
			yDoMouse: parseInt(yDoMouse)
		};
};

module.exports = ReverseI;
},{}],7:[function(require,module,exports){
var normalize = require('normalize-css');
var ACE2D = require('./ACE2D');
var MundoSenai = require('./MundoSenai');

// Andares
var terreo = document.querySelector('senai-map[name="terreo"] canvas');
var andar = document.querySelector('senai-map[name="andar"] canvas');


// Inicia as cosias básicas :P
var MS = new MundoSenai();
MS.changeMap();

/*
/
/  Terreo
/
*/

var MSTerreo = new ACE2D(terreo, {
	scale: 15,
	originY: 520
});

// Chão
MSTerreo.newBox(0, [0, 0, 0], [30, 30, 0.5], MSTerreo.colors.grey);

// Salas da Direita
MSTerreo.newBox(0, [27.5, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 218);
MSTerreo.newBox(0, [25, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 216);
MSTerreo.newBox(0, [22.5, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 214);
MSTerreo.newBox(0, [20, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 212);
MSTerreo.newBox(0, [17.5, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 210);
MSTerreo.newBox(0, [15, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 208);
MSTerreo.newBox(0, [12.5, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 206);
MSTerreo.newBox(0, [10, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 204);

// Salas da Esquerda
MSTerreo.newBox(0, [27.5, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 217);
MSTerreo.newBox(0, [25, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 215);
MSTerreo.newBox(0, [22.5, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 213);
MSTerreo.newBox(0, [20, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 211);
MSTerreo.newBox(0, [17.5, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 209);
MSTerreo.newBox(0, [15, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 207);
MSTerreo.newBox(0, [12.5, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 205);
MSTerreo.newBox(0, [10, 20, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 203);

MSTerreo.setupModal();
MSTerreo.roomMagic();

/*
/
/  1º Andar
/
*/

var MSAndar = new ACE2D(andar, {
	scale: 15,
	originY: 520
});

MSAndar.newBox(0, [0, 0, 0], [30, 30, 0.5], MSAndar.colors.grey);
MSAndar.newBox(0, [20, 10, 0.5], [2.5, 2.5, 1.5], MSAndar.colors.lightgreen);
MSAndar.newBox(0, [11, 10, 0.5], [2.5, 2.5, 1.5], MSAndar.colors.indigo);
MSAndar.newBox(0, [9, 10, 0.5], [2.5, 2.5, 1.5], MSAndar.colors.lightgreen);

},{"./ACE2D":4,"./MundoSenai":5,"normalize-css":1}]},{},[7]);
