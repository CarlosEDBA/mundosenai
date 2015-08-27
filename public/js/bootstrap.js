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
MundoSenai.newBox(1, [0, 0, 0], [30, 25, 0.5], MundoSenai.colors.grey);

// Salas da Direita
MundoSenai.newBox(1, [24, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, 1, 201);
MundoSenai.newBox(1, [20, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, 1, 202);
MundoSenai.newBox(1, [16, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, 1, 203);
MundoSenai.newBox(1, [12, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, 1);
MundoSenai.newBox(1, [8, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, 1);
MundoSenai.newBox(1, [4, 20, 0.5], [4, 5, 3], MundoSenai.colors.black, 1);

// Portas da Direita
MundoSenai.newBox(1, [24.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox(1, [20.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox(1, [16.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox(1, [12.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox(1, [8.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);
MundoSenai.newBox(1, [4.5, 20, 0.5], [0.5, 0.1, 1], MundoSenai.colors.brown);

// Salas da Direita
MundoSenai.newBox(1, [24, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox(1, [20, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox(1, [16, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox(1, [12, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox(1, [8, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);
MundoSenai.newBox(1, [4, 10, 0.5], [4, 5, 3], MundoSenai.colors.black);

MundoSenai.setupModal();
MundoSenai.roomMagic();
//MundoSenai.mouseCoords();