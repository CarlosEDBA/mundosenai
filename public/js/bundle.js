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
var ACE3D = function () {
	this.lalala = "lalala";
	this.container;
	this.stats;
	this.camera;
	this.scene;
	this.raycaster;
	this.renderer;
	this.controls;
};

ACE3D.prototype.helper = {
	webglAvailable: function () {
		try {
			var canvas = document.createElement('canvas');
			return !!( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
		} catch (e) {
			return false;
		}
	}
}

ACE3D.prototype.newScene = function () {
	this.scene = new THREE.Scene();
}

ACE3D.prototype.newCamera = function (VIEW_ANGLE, ASPECT, NEAR, FAR) {
	this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	this.scene.add(this.camera);
}

ACE3D.prototype.newLight = function () {
	this.light = new THREE.DirectionalLight( 0xffffff, 1 );
	this.light.position.set(0, 250, 0);
	this.scene.add(this.light);
}

ACE3D.prototype.setRaycaster = function (raycaster, callback) {
	this.raycaster = raycaster;
	callback();
}

ACE3D.prototype.setStats = function (stats, callback) {
	this.stats = stats;
	callback();
}

ACE3D.prototype.setRenderer = function (renderer, callback) {
	this.renderer = renderer;
	callback();
}

ACE3D.prototype.render = function (SCREEN_WIDTH, SCREEN_HEIGHT) {
	if (this.helper.webglAvailable()) {
    	this.renderer = new THREE.WebGLRenderer({ antialias: true });
	} else {
    	this.renderer = new THREE.CanvasRenderer();
	}

	this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

	document.body.appendChild(this.renderer.domElement);
}

ACE3D.prototype.animate = function (that) {
	requestAnimationFrame(this.__proto__.animate);
	that.renderer.render(that.scene, that.camera);
	/*function animate () {
		requestAnimationFrame(animate);
		
	}
	animate();*/
}

ACE3D.prototype.addControls = function () {
	this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
}

ACE3D.prototype.callback = function (callback) {
	callback();
}

module.exports = ACE3D;

},{}],5:[function(require,module,exports){
var normalize = require('normalize-css');
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

},{"./ACE3D":4,"./helpers":6,"normalize-css":1}],6:[function(require,module,exports){
module.exports = {
	createBox: function (scene) {
		// Create an array of materials to be used in a cube, one for each side
		var cubeMaterialArray = [];
		// order to add materials: x+,x-,y+,y-,z+,z-
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );
		var cubeMaterials = new THREE.MeshFaceMaterial( cubeMaterialArray );
		// Cube parameters: width (x), height (y), depth (z), 
		//        (optional) segments along x, segments along y, segments along z
		var cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
		// using THREE.MeshFaceMaterial() in the constructor below
		//   causes the mesh to use the materials stored in the geometry
		cube = new THREE.Mesh( cubeGeometry, cubeMaterials );
		cube.position.set(-100, 100, -300);
		scene.add(cube);
	},

	onWindowResize: function (twoo) {
		twoo.camera.aspect = window.innerWidth / window.innerHeight;
		twoo.camera.updateProjectionMatrix();

		twoo.renderer.setSize(window.innerWidth, window.innerHeight);
		twoo.renderer.render(twoo.scene, twoo.camera);
	},

	addControls: function (twoo) {
		twoo.controls = new THREE.OrbitControls(twoo.camera, twoo.renderer.domElement);
		twoo.controls.addEventListener('change', function () {
			twoo.renderer.render(twoo.scene, twoo.camera);
		});
	}
};
},{}]},{},[5]);