var normalize = require('normalize-css');
var ACE2D = require('./ACE2D');

var SenaiRoom = document.registerElement('senai-room', { prototype: Object.create(HTMLElement.prototype) });
var Terreo = document.querySelector('#Terreo');
var Andar1 = document.querySelector('#Andar1');
var inWidth = window.innerWidth;
var inHeight = window.innerHeight;

var MSTerreo = new ACE2D(Terreo, {
	scale: 15,
	originY: 480
});

// Chão
MSTerreo.newBox(1, [0, 0, 0], [32, 30, 0.5], MSTerreo.colors.grey);

// Salas da Direita
MSTerreo.newBox(1, [24, 20, 0.5], [4, 5, 3], MSTerreo.colors.black, 1, 201);
MSTerreo.newBox(1, [20, 20, 0.5], [4, 5, 3], MSTerreo.colors.black, 1, 202);
MSTerreo.newBox(1, [16, 20, 0.5], [4, 5, 3], MSTerreo.colors.black, 1, 203);
MSTerreo.newBox(1, [12, 20, 0.5], [4, 5, 3], MSTerreo.colors.black, 1);
MSTerreo.newBox(1, [8, 20, 0.5], [4, 5, 3], MSTerreo.colors.black, 1);
MSTerreo.newBox(1, [4, 20, 0.5], [4, 5, 3], MSTerreo.colors.black, 1);

// Portas da Direita
MSTerreo.newBox(1, [24.5, 20, 0.5], [0.5, 0.1, 1], MSTerreo.colors.brown);
MSTerreo.newBox(1, [20.5, 20, 0.5], [0.5, 0.1, 1], MSTerreo.colors.brown);
MSTerreo.newBox(1, [16.5, 20, 0.5], [0.5, 0.1, 1], MSTerreo.colors.brown);
MSTerreo.newBox(1, [12.5, 20, 0.5], [0.5, 0.1, 1], MSTerreo.colors.brown);
MSTerreo.newBox(1, [8.5, 20, 0.5], [0.5, 0.1, 1], MSTerreo.colors.brown);
MSTerreo.newBox(1, [4.5, 20, 0.5], [0.5, 0.1, 1], MSTerreo.colors.brown);

// Salas da Direita
MSTerreo.newBox(1, [24, 10, 0.5], [4, 5, 3], MSTerreo.colors.black);
MSTerreo.newBox(1, [20, 10, 0.5], [4, 5, 3], MSTerreo.colors.black);
MSTerreo.newBox(1, [16, 10, 0.5], [4, 5, 3], MSTerreo.colors.black);
MSTerreo.newBox(1, [12, 10, 0.5], [4, 5, 3], MSTerreo.colors.black);
MSTerreo.newBox(1, [8, 10, 0.5], [4, 5, 3], MSTerreo.colors.black);
MSTerreo.newBox(1, [4, 10, 0.5], [4, 5, 3], MSTerreo.colors.black);

MSTerreo.setupModal();
MSTerreo.roomMagic();
//MSTerreo.mouseCoords();
