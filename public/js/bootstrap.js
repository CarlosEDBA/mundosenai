var normalize = require('normalize-css');
var Ace = require('./ace/ace');

var MundoSenai = new Ace();

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
	MundoSenai.helpers.createBox(MundoSenai.scene);

	function animate () {
		requestAnimationFrame(animate);
		MundoSenai.renderer.render(MundoSenai.scene, MundoSenai.camera);
	}
	animate();
});

MundoSenai.addControls();