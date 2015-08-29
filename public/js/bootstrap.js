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
