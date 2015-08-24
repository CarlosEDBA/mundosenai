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
