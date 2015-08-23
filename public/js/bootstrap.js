var normalize = require('normalize-css');
var ACE2D = require('./ACE2D');

var MundoSenai = new ACE2D(document.querySelector('canvas'));

// Chão
MundoSenai.newBox([0, 0, 0], [20, 20, 0.5], MundoSenai.colors.grey);
// Prédios
MundoSenai.newBox([10.5, 16.5, 0], [10, 4, 7], MundoSenai.colors.lightblue);
MundoSenai.newBox([0.5, 16.5, 0], [10, 4, 7], MundoSenai.colors.black);
MundoSenai.newBox([0.5, 0.5, 0], [20, 4, 7], MundoSenai.colors.black);
// Portas
MundoSenai.newBox([2, 17, -0.6], [2, 0.2, 3.5], MundoSenai.colors.lightblue);
MundoSenai.newBox([11.5, 16.5, 0], [2, 0.2, 3.5], MundoSenai.colors.black);

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
