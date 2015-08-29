var normalize = require('normalize-css');
var ACE2D = require('./ACE2D');
var MundoSenai = require('./MundoSenai');

// Andares
var terreo = document.querySelector('senai-map[name="terreo"] canvas');
var andar = document.querySelector('senai-map[name="andar"] canvas');


// Inicia as cosias básicas :P
var MS = new MundoSenai();
MS.setupModal();
MS.changeMap();
//MS.mouseCoords();

/*
/
/  Terreo
/
*/

var MSTerreo = new ACE2D(terreo, {
	scale: 12,
	originY: 520
});

// Chão
MSTerreo.newBox(0, [0, 0, 0], [42, 40, 0.5], MSTerreo.colors.grey);

// Salas da Direita
MSTerreo.newBox(0, [27.5, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 218);
MSTerreo.newBox(0, [25, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 216);
MSTerreo.newBox(0, [22.5, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue, 1, 214);
MSTerreo.newBox(0, [20, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.cyan, 1, 212);
MSTerreo.newBox(0, [17.5, 27, 0.5], [2.5, 2.5, 1.5], MSTerreo.colors.blue);
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

MSTerreo.setupRooms();

/*
/
/  1º Andar
/
*/

var MSAndar = new ACE2D(andar, {
	scale: 11,
	originY: 0
});

var blue1 = new MSAndar.Color(123, 175, 215);
var blue2 = new MSAndar.Color(115, 186, 230);
var blue3 = new MSAndar.Color(156, 176, 202);
var blue4 = new MSAndar.Color(156, 204, 210);
var blue5 = new MSAndar.Color(155, 218, 218);
var girl = new MSAndar.Color(216, 191, 216);
var door = new MSAndar.Color(60, 40, 20);
var whitedoor = new MSAndar.Color(225, 225, 225);

// Chão
MSAndar.newBox([[0, 0, 0], 1.4], [-2, -10, 0], [40, 50, 0.5], MSAndar.colors.grey);

// Salas da Direit
MSAndar.newBox([[0, 0, 0], 1.4], [32.9, 37, 0.5], [3.5, 3, 3], blue4);
MSAndar.newBox([[0, 0, 0], 1.4], [29.4, 37, 0.5], [3.5, 3, 3], blue1);
MSAndar.newBox([[0, 0, 0], 1.4], [25.9, 37, 0.5], [3.5, 3, 3], blue2);

MSAndar.newBox([[0, 0, 0], 1.4], [21.9, 37, 0.5], [5, 3, 3], girl); //banheiro fem
MSAndar.newBox([[0, 0, 0], 1.4], [21, 36, 0.5], [3, 4, 3], blue2);
MSAndar.newBox([[0, 0, 0], 1.4], [14.9, 37, 0.5], [6, 3, 3], blue2); //banheiro masc

MSAndar.newBox([[0, 0, 0], 1.4], [11.5, 37, 0.5], [3.4, 3, 3], blue1); //cordenaçao
MSAndar.newBox([[0, 0, 0], 1.4], [7, 37, 0.5], [4.5, 3, 3], blue5); //sala201
MSAndar.newBox([[0, 0, 0], 1.4], [2.5, 37, 0.5], [4.5, 3, 3], blue1); //sala203
MSAndar.newBox([[0, 0, 0], 1.4], [-2, 37, 0.5], [4.5, 3, 3], blue4); //sala201


// Portas da Direita
MSAndar.newBox([[0, 0, 0], 1.4], [1.5, 37, 0.5], [0.5, 0.1, 1], door);
MSAndar.newBox([[0, 0, 0], 1.4], [4, 37, 0.5], [0.5, 0.1, 1], door);
MSAndar.newBox([[0, 0, 0], 1.4], [8, 37, 0.5], [0.5, 0.1, 1], door);
MSAndar.newBox([[0, 0, 0], 1.4], [14, 37, 0.5], [0.5, 0.1, 1], door);

//Salas da Direita
MSAndar.newBox([[0, 0, 0], 1.4], [15, 28, 0.5], [3.4, 3, 3], blue1);
MSAndar.newBox([[0, 0, 0], 1.4], [10, 28, 0.5], [3.4, 3, 3], blue5);
MSAndar.newBox([[0, 0, 0], 1.4], [7, 28, 0.5], [3.4, 3, 3], blue3);
MSAndar.newBox([[0, 0, 0], 1.4], [4, 28, 0.5], [3.4, 3, 3], blue5);
MSAndar.newBox([[0, 0, 0], 1.4], [-2, 28, 0.5], [3.4, 3, 3], blue2);