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
var Helpers = require('./Helpers');
var ReverseI = require('./ReverseI');

var Ace = Ace || function (canvas, options) {

	this.isomer = new Isomer(canvas, options);
	this.Point = Isomer.Point;
	this.Path = Isomer.Path;
	this.Shape = Isomer.Shape;
	this.Vector = Isomer.Vector;
	this.Color = Isomer.Color;

	this.canvas = canvas;
	this.ctx = canvas.getContext('2d');
	this.rect = canvas.getBoundingClientRect();

	this.shape;
	this.room = 0;
	this.counter = 0;
	this.axis = [];
	this.axisLen = 0;
	this.coords = {};
};

Ace.prototype.setCounter = function () {
	this.counter += 1;
	return this;
};

Ace.prototype.getCounter = function () {
	return this.counter;
};

Ace.prototype.newBox = function (rotation, coord, xyz, color) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);
	var coords;

	box = (rotation) ? box
		.rotateX(this.Point(0, 0, 0), rotation / 10)
		.rotateY(this.Point(0, 0, 0), rotation / 10)
		.rotateZ(this.Point(0, 0, 0), rotation / 10) : box;

	if (typeof(color) === 'string') {
		color = Helpers.hexToRgb(color);
		color = new this.Color(color.r, color.g, color.b);
	};
	
	this.isomer.add(box, color);
	this.shape = box;

	return this;
};

Ace.prototype.getAxis = function () {
	var that = this;
	var ReI = new ReverseI(this, this.canvas);
	var ctx = this.ctx;
	var rect = this.rect;

	var faces = [];
	var vertices = [];
	var verticesLen = vertices.length;

	//console.log('Essa é uma caixinha composta de 6 faces de 4 vertices');

	this.axis = [];
	this.axisLen = 0;
	this.axis.push(this.counter);
	this.axisLen = this.counter;

	ReI.setShape(this.shape);

	ReI.init(function (data) { // Faces
		faces.push(data);
		data.forEach(function (el, ind, arr) { // Vértices
/*			ctx.beginPath();
			ctx.arc(el.x, el.y, 2.5, 0, 1.5 * Math.PI, false);
			ctx.fillStyle = "#212121";
			ctx.font = '8px Roboto';
			ctx.fillText('x: ' + el.x, el.x + 5, el.y - 2);
			ctx.fillText('y: ' + el.y, el.x + 5, el.y + 6);
			ctx.fill();
			ctx.stroke();*/
		});
	});

	this.setCounter();

	this.axis[this.axisLen] = faces;
	this.axisLen = this.axis.length;

	return this;
};

Ace.prototype.getCoords = function () {
	var x = [];
	var y = [];	
	var xm = [];
	var ym = [];

	var currentBox = this.axisLen - 1;

	this.axis[currentBox][0].forEach(function (el, ind, arr) {
		x.push(el.x);
		xm.push(el.xDoMouse);
	});
	this.axis[currentBox][1].forEach(function (el, ind, arr) {
		y.push(el.y);
		ym.push(el.yDoMouse);
	});

	this.coords = {
		x: x,
		y: y,
		xMouse: xm,
		yMouse: ym
	};

	return this;
};

Ace.prototype.bundleData = function () {
	this.getAxis();
	this.getCoords();
	return this;
};

Ace.prototype.newRoom = function (room) {
	var senaiRoom = document.createElement('senai-room');

	senaiRoom.dataset.room = room;
	senaiRoom.dataset.x1 = this.coords.x[0];
	senaiRoom.dataset.x2 = this.coords.x[1];
	senaiRoom.dataset.x3 = this.coords.x[2];
	senaiRoom.dataset.x4 = this.coords.x[3];
	senaiRoom.dataset.y1 = this.coords.y[0];
	senaiRoom.dataset.y2 = this.coords.y[1];
	senaiRoom.dataset.y3 = this.coords.y[2];
	senaiRoom.dataset.y4 = this.coords.y[3];
	senaiRoom.dataset.xm1 = this.coords.xMouse[0];
	senaiRoom.dataset.xm2 = this.coords.xMouse[1];
	senaiRoom.dataset.xm3 = this.coords.xMouse[2];
	senaiRoom.dataset.xm4 = this.coords.xMouse[3];
	senaiRoom.dataset.ym1 = this.coords.yMouse[0];
	senaiRoom.dataset.ym2 = this.coords.yMouse[1];
	senaiRoom.dataset.ym3 = this.coords.yMouse[2];
	senaiRoom.dataset.ym4 = this.coords.yMouse[3];

	document.body.appendChild(senaiRoom);

	this.room = room;

	return this;
};

Ace.prototype.appendRoomNum = function (color, font, pos) {
	var currentRoom = document.querySelector('[data-room="' + this.room + '"]');

	var textX = parseInt(currentRoom.dataset.x2) - pos[0];
	var textY = parseInt(currentRoom.dataset.y1) - pos[1];

	this.ctx.fillStyle = color;
	this.ctx.font = font;
	this.ctx.fillText(this.room, textX, textY);

	return this;
};

Ace.prototype.appendText = function (font, color, text, pos) {
	var currentRoom = document.querySelector('[data-room="' + this.room + '"]');
	currentRoom.dataset.text = text;

	var textX = parseInt(currentRoom.dataset.x2) - pos[0];
	var textY = parseInt(currentRoom.dataset.y1) - pos[1];

	this.ctx.fillStyle = color;
	this.ctx.font = font;
	this.ctx.fillText(text, textX, textY);

	return this;
};

Ace.prototype.appendImg = function (img, pos, width, height) {
	var currentRoom = document.querySelector('[data-room="' + this.room + '"]');
	currentRoom.dataset.img = img;

	var image = new Image();
	image.src = img;

	var imgX = parseInt(currentRoom.dataset.x2) - pos[0];
	var imgY = parseInt(currentRoom.dataset.y1) - pos[1];

	this.ctx.imageSmoothingEnabled = true;

	image.onload = function () {
		(width && height) ?
			this.ctx.drawImage(image, imgX, imgY, width, height) :
			this.ctx.drawImage(image, imgX, imgY);
	}.bind(this);

	return this;
};

Ace.prototype.setupRooms = function () {
	var rooms = document.querySelectorAll('senai-room');
	var roomsLen = rooms.length;

	this.canvas.addEventListener('mousedown', clickBox.bind(this));

	function clickBox (e) {
		var mouseX = e.x;
		var mouseY = e.y;

		[].forEach.call(rooms, function (el, ind, arr) {
			if (
				mouseX > el.dataset.xm1 &&
				mouseX < el.dataset.xm3 &&
				mouseY > el.dataset.ym2 &&
				mouseY < el.dataset.ym4)
			{
				console.log('Sala: ' + el.dataset.room + ' - x: ' + mouseX + ' - y: ' + mouseY);
				this.openModal(el.dataset.room);
			};
		}, this);
	}

	// draw clickBox
	/*for (var i=0; i<roomsLen; i++) {
		this.ctx.fillStyle = "#212121";
		this.ctx.fillRect(rooms[i].dataset.x1, rooms[i].dataset.y2, 5, 5);
		this.ctx.fillRect(rooms[i].dataset.x3, rooms[i].dataset.y4, 5, 5);
	};*/

	return this;
};

Ace.prototype.openModal = function (room) {
	var modal = document.querySelector('senai-modal');
	modal.setAttribute('room', room);
	modal.setAttribute('state', 'open');
	return this;
};

module.exports = Ace;

},{"./Helpers":5,"./ReverseI":7}],5:[function(require,module,exports){
module.exports = {
	componentToHex: function (c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	},

	rgbToHex: function (r, g, b) {
    	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	},

	hexToRgb: function (hex) {
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	        r: parseInt(result[1], 16),
	        g: parseInt(result[2], 16),
	        b: parseInt(result[3], 16)
	    } : null;
	}
};
},{}],6:[function(require,module,exports){
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

MundoSenai.prototype.setupModal = function () {
	var modal = document.querySelector('senai-modal');
	var close = document.querySelector('senai-modal .close');

	close.addEventListener('click', toggleModal);

	function toggleModal(e) {
		modal.setAttribute('room', '');
		modal.setAttribute('state', '');
	}
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
			terreo.setAttribute('state', 'down');
			andar.setAttribute('state', 'open');
			updown.setAttribute('state', 'down');
		} else if (state == 'down') {
			terreo.setAttribute('state', 'open');
			andar.setAttribute('state', 'up');
			updown.setAttribute('state', 'up');
		}
	}
};

MundoSenai.prototype.viewModes = function () {
	var wow = document.querySelector('senai-wow');
	var updown = document.querySelector('senai-updown');
	var terreo = document.querySelector('senai-map[name="terreo"]');
	var terreoCanvas = document.querySelector('senai-map[name="terreo"] canvas');
	var andar = document.querySelector('senai-map[name="andar"]');
	var andarCanvas = document.querySelector('senai-map[name="andar"] canvas');
	
	wow.addEventListener('click', function (e) {
		var state = wow.getAttribute('state');
		
		if (state !== 'dev') {
			wow.setAttribute('state', 'dev');
			
			terreo.setAttribute('state', 'hehehe');
			andar.setAttribute('state', 'hihihi');

			terreoCanvas.addEventListener('click', function (e) {
				wow.setAttribute('state', '');
				updown.setAttribute('state', 'up');
				terreo.setAttribute('state', 'open');
				andar.setAttribute('state', 'up');
			});

			andarCanvas.addEventListener('click', function (e) {
				wow.setAttribute('state', '');
				updown.setAttribute('state', 'down');
				terreo.setAttribute('state', 'down');
				andar.setAttribute('state', 'open');
			});
		} else if (state == 'dev') {
			wow.setAttribute('state', '');
			terreo.setAttribute('state', 'open');
			andar.setAttribute('state', 'up');
		}
		
	});
};

module.exports = MundoSenai;

},{}],7:[function(require,module,exports){
var ReverseI = ReverseI || function (Ace, canvas) {
	this.Ace = Ace;
	this.canvas = canvas;
	this.counter = 0;

	this.scale = Ace.isomer.scale;
	this.angle = Ace.isomer.angle;
	this.originX = Ace.isomer.originX;
	this.originY = Ace.isomer.originY;
	this.transformation = Ace.isomer.transformation;

	this.ReverseShape;

	this.Color = Ace.Color;
	this.Path = Ace.Path;
	this.Point = Ace.Point;
	this.Shape = Ace.Shape;
	this.Vector = Ace.Vector;
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

	return {
		x: parseInt(x),
		y: parseInt(y),
		xDoMouse: parseInt(xDoMouse),
		yDoMouse: parseInt(yDoMouse)
	};
};

module.exports = ReverseI;
},{}],8:[function(require,module,exports){
var normalize = require('normalize-css');
var Ace = require('./Ace');
var MundoSenai = require('./MundoSenai');

// Andares
var terreo = document.querySelector('senai-map[name="terreo"] canvas');
var andar = document.querySelector('senai-map[name="andar"] canvas');


// Inicia as cosias básicas :P
var MS = new MundoSenai();
MS.setupModal();
MS.changeMap();
MS.viewModes();
//MS.mouseCoords();

var ChãoBranco = '#CBCBCB';
var SalaBranca = '#D9D9D9';
var SalaCinza = '#BDBDBD';
var BanheiroRosa = '#FF80AB';
var BanheiroAzul = '#90CAF9';
var PortaMarrom = '#795548';
var Azulzinho = '#69F0AE';
var Verdinho = '#B9F6CA';

/*
/
/  Terreo
/
*/

var MSTerreo = new Ace(terreo, {
	scale: 11,
	originY: 0
});

// Chão
MSTerreo.newBox(1.4, [-2, -8, 0], [42, 50, 0.5], ChãoBranco);

// Direita
MSTerreo.newBox(1.4, [-2, 41.5, 0.5], [30, 0.5, 0.5], Azulzinho);

MSTerreo.newBox(1.4, [-2, 27, 0.5], [2, 0.5, 0.5], Azulzinho);
MSTerreo.newBox(1.4, [6, 27, 0.5], [3, 0.5, 0.5], Azulzinho);
MSTerreo.newBox(1.4, [14, 27, 0.5], [3, 0.5, 0.5], Azulzinho);

MSTerreo.newBox(1.4, [-2, 27, 0.5], [0.5, 15, 0.5], Azulzinho);

// Esquerda
MSTerreo.newBox(1.4, [-2, -8, 0.5], [30, 0.5, 0.5], Azulzinho);

MSTerreo.newBox(1.4, [-2, 7, 0.5], [2, 0.5, 0.5], Azulzinho);
MSTerreo.newBox(1.4, [6, 7, 0.5], [3, 0.5, 0.5], Azulzinho);
MSTerreo.newBox(1.4, [14, 7, 0.5], [3, 0.5, 0.5], Azulzinho);

MSTerreo.newBox(1.4, [-2, -8, 0.5], [0.5, 15, 0.5], Azulzinho);


MSTerreo.setupRooms();

/*
/
/  1º Andar
/
*/

var MSAndar = new Ace(andar, {
	scale: 11,
	originY: 0
});

var blue1 = new MSAndar.Color(123, 175, 215);
var blue2 = new MSAndar.Color(115, 186, 230);
var blue3 = new MSAndar.Color(156, 176, 202);
var blue4 = new MSAndar.Color(176, 190, 225);
var blue5 = new MSAndar.Color(155, 218, 218);
var girl = new MSAndar.Color(206, 181, 206);
var men = new MSAndar.Color(100, 181, 255);
var door = new MSAndar.Color(60, 40, 20);
var whitedoor = new MSAndar.Color(215, 215, 215);
var black = new MSAndar.Color(10, 10, 10);
var g1 = new MSAndar.Color(100, 100, 100);
var g2 = new MSAndar.Color(215, 215, 215);
var door2 = new MSAndar.Color(93, 64, 55);


// Chão

MSAndar.newBox(1.4, [21, -10, 0], [17, 13, 0.5], ChãoBranco); // Direita Cima
MSAndar.newBox(1.4, [21, 28, 0], [17, 12, 0.5], ChãoBranco); // Esquerda Cima
MSAndar.newBox(1.4, [15, -10, 0], [6, 50, 0.5], ChãoBranco); // Meio
MSAndar.newBox(1.4, [-2, 28, 0], [17, 12, 0.5], ChãoBranco); // Esquerda Baixo
MSAndar.newBox(1.4, [-2, -10, 0], [17, 13, 0.5], ChãoBranco); // Direita Baixo

//MSAndar.newBox(1.4, [-2, -10, 0], [40, 50, 0.5], MSAndar.colors.grey);

MSAndar.newBox(1.4, [16, 4, -1], [0, 28, 3], ChãoBranco); // Parede branca de baixo

// LADO ESQUERDOOO

// Salas da Esquerda
MSAndar
	.newBox(1.4, [32.9, 37, 0.5], [5, 3, 3], SalaBranca)
	.bundleData()
	.newRoom(218)
	.appendRoomNum('300 Roboto 15px', '#000', [20, 5]);
	//.appendText('300 Roboto 15px', '#000', 'HU3BR!', [25, 5])
	//.appendImg('../img/nick.png', [5, 5], 55, 50); // 218

MSAndar.newBox(1.4, [29.4, 37, 0.5], [3.5, 3, 3], SalaCinza); // 216
MSAndar.newBox(1.4, [26.5, 37, 0.5], [3.5, 3, 3], SalaBranca); // ?

MSAndar.newBox(1.4, [21.5, 38, 0.5], [5, 2, 3], BanheiroRosa); // Banheiro Feminino
MSAndar.newBox(1.4, [20, 37, 0.5], [3, 3, 3], BanheiroAzul); // Banheiro Masculino pt2
MSAndar.newBox(1.4, [14.9, 38, 0.5], [5.2, 2, 3], BanheiroAzul); // Banheiro Masculino

MSAndar.newBox(1.4, [11.5, 37, 0.5], [3.4, 3, 3], SalaBranca); // Coordenaçao
MSAndar.newBox(1.4, [7, 37, 0.5], [4.5, 3, 3], SalaCinza); // 205
MSAndar.newBox(1.4, [2.5, 37, 0.5], [4.5, 3, 3], SalaBranca); // 203
MSAndar.newBox(1.4, [-2, 37, 0.5], [4.5, 3, 3], SalaCinza); //201

// Portas da Direita
MSAndar.newBox(1.4, [33.6, 37, 0.5], [0.5, 0.1, 1], PortaMarrom); // 218
MSAndar.newBox(1.4, [32, 37, 0.5], [0.5, 0.1, 1], PortaMarrom); // 216
MSAndar.newBox(1.4, [27.5, 37, 0.5], [0.5, 0.1, 1], PortaMarrom); // ?

MSAndar.newBox(1.4, [24.5, 38, 0.5], [1, 0.1, 1.6], whitedoor); // Banheiro Feminino
MSAndar.newBox(1.4, [17, 38, 0.5], [1, 0.1, 1.6], whitedoor); // Banheiro Masculino

MSAndar.newBox(1.4, [1.5, 37, 0.5], [0.5, 0.1, 1], PortaMarrom); // 201
MSAndar.newBox(1.4, [3.3, 37, 0.5], [0.5, 0.1, 1], PortaMarrom); // 203
MSAndar.newBox(1.4, [8, 37, 0.5], [0.5, 0.1, 1], PortaMarrom); // 205
MSAndar.newBox(1.4, [14, 37, 0.5], [0.5, 0.1, 1], PortaMarrom); // Coordenação


// Salas da Direita
MSAndar.newBox(1.4, [33, 28, 0.5], [5, 3, 3], SalaBranca); // 217
MSAndar.newBox(1.4, [28, 28, 0.5], [5, 3, 3], SalaCinza); // 215
MSAndar.newBox(1.4, [23, 28, 0.5], [6, 3, 3], SalaBranca); // Laboratório 1
MSAndar.newBox(1.4, [21, 28, 1], [2, 2, 2.5], SalaCinza); // Servidor

MSAndar.newBox(1.4, [8.4, 28, 0.5], [6.2, 3, 3], SalaBranca); // Sala dos Professores
MSAndar.newBox(1.4, [3.2, 28, 0.5], [5.2, 3, 3], SalaCinza); // 204
MSAndar.newBox(1.4, [-2, 28, 0.5], [5.2, 3, 3], SalaBranca); // 202

MSAndar.newBox(1.4, [21, 10, 0.5], [5, 6, 3], Verdinho); // Escada
MSAndar.newBox(1.4, [21, 23, 0.5], [2, 2, 3], Verdinho); // Elevador


// LADO DIREITOOU

// Salas da Esquerda
MSAndar.newBox(1.4, [34, 0, 0.5], [4, 3, 3], SalaBranca); // 227
MSAndar.newBox(1.4, [29, 0, 0.5], [5, 3, 3], SalaCinza); // 225
MSAndar.newBox(1.4, [25, 0, 0.5], [4, 3, 3], SalaBranca); // 223
MSAndar.newBox(1.4, [21, 0, 0.5], [4, 3, 3], SalaCinza); // 221

MSAndar.newBox(1.4, [9.6, 0, 0.5], [5, 3, 3], SalaBranca); // Lab Adobe
MSAndar.newBox(1.4, [7.5, 0, 0.5], [3, 3, 3], SalaCinza); // Lab Redes
MSAndar.newBox(1.4, [1, 0, 0.5], [6.5, 3, 3], SalaBranca); // Lab 03

// Portas da Esquerda
MSAndar.newBox(1.4, [34.8, 0, 0.5], [0.5, 0.1, 1], PortaMarrom); // 227
MSAndar.newBox(1.4, [33, 0, 0.5], [0.5, 0.1, 1], PortaMarrom); // 225
MSAndar.newBox(1.4, [26, 0, 0.5], [0.5, 0.1, 1], PortaMarrom); // 223
MSAndar.newBox(1.4, [24, 0, 0.5], [0.5, 0.1, 1], PortaMarrom); // 221

MSAndar.newBox(1.4, [13.5, 0, 0.5], [0.5, 0.1, 1], PortaMarrom); // Lab Adobe
MSAndar.newBox(1.4, [9.2, 0, 0.5], [0.5, 0.1, 1], PortaMarrom); // Lab Redes
MSAndar.newBox(1.4, [6.8, 0, 0.5], [0.5, 0.1, 1], PortaMarrom); // Lab 03

// Salas da Direita
MSAndar.newBox(1.4, [34, -10, 0.5], [4, 3, 3], SalaBranca); // 228
MSAndar.newBox(1.4, [30, -10, 0.5], [4, 3, 3], SalaCinza); // 226
MSAndar.newBox(1.4, [26, -10, 0.5], [4, 3, 3], SalaBranca); // 224

MSAndar.newBox(1.4, [22.8, -10, 0.5], [3.2, 2, 3], BanheiroRosa); // Banheiro Feminino
MSAndar.newBox(1.4, [18, -10, 0.5], [4.8, 2, 3], BanheiroAzul); // Banheiro Masculino

MSAndar.newBox(1.4, [12, -10, 0.5], [6, 3, 3], SalaBranca); // 222
MSAndar.newBox(1.4, [6, -10, 0.5], [6, 3, 3], SalaCinza); // 220
//MSAndar.newBox(1.4, [1, -10, 0.5], [5, 3, 3], blue1); // Espaço Vazio

MSAndar.newBox(1.4, [-2, -10, 0.5], [3, 13, 3], SalaBranca); // Auditorio

// Parede de Cima
MSAndar.newBox(1.4, [21, 0, 0.5], [0, 10, 3], ChãoBranco); // Esquerda
MSAndar.newBox(1.4, [21, 16, 0.5], [0, 7, 3], ChãoBranco); // Meio
MSAndar.newBox(1.4, [21, 25, 0.5], [0, 5, 3], ChãoBranco); // Direita

MSAndar.setupRooms();

},{"./Ace":4,"./MundoSenai":6,"normalize-css":1}]},{},[8]);
