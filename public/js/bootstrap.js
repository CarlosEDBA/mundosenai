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
MSTerreo.newBox(0, [25, 27, 0.5], [5, 5, 6], MSTerreo.colors.blue, 1, 100);

// Salas da Esquerda
MSTerreo.newBox(0, [15, 6, 0.5], [5, 5, 6], MSTerreo.colors.blue, 1, 101);


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

MSAndar.newBox([[0, 0, 0], 1.4], [21, -10, 0], [17, 13, 0.5], MSAndar.colors.grey); // Direita Cima
MSAndar.newBox([[0, 0, 0], 1.4], [21, 28, 0], [17, 12, 0.5], MSAndar.colors.grey); // Esquerda Cima
MSAndar.newBox([[0, 0, 0], 1.4], [15, -10, 0], [6, 50, 0.5], MSAndar.colors.grey); // Meio
MSAndar.newBox([[0, 0, 0], 1.4], [-2, 28, 0], [17, 12, 0.5], MSAndar.colors.grey); // Esquerda Baixo
MSAndar.newBox([[0, 0, 0], 1.4], [-2, -10, 0], [17, 13, 0.5], MSAndar.colors.grey); // Direita Baixo

//MSAndar.newBox([[0, 0, 0], 1.4], [-2, -10, 0], [40, 50, 0.5], MSAndar.colors.grey);

MSAndar.newBox([[0, 0, 0], 1.4], [16, 4, -1], [0, 28, 3], blue5); // Parede branca de baixo

// LADO ESQUERDOOO

// Salas da Esquerda
MSAndar.newBox([[0, 0, 0], 1.4], [32.9, 37, 0.5], [5, 3, 3], blue4, 1, 218); // 218
MSAndar.newBox([[0, 0, 0], 1.4], [29.4, 37, 0.5], [3.5, 3, 3], blue1, 1, 216); // 216
MSAndar.newBox([[0, 0, 0], 1.4], [26.5, 37, 0.5], [3.5, 3, 3], blue2); // ?

MSAndar.newBox([[0, 0, 0], 1.4], [21.5, 38, 0.5], [5, 2, 3], girl, 1, null, 'Banheiro', [3, 1]); // Banheiro Feminino
MSAndar.newBox([[0, 0, 0], 1.4], [20, 37, 0.5], [3, 3, 3], men); // Banheiro Masculino pt2
MSAndar.newBox([[0, 0, 0], 1.4], [14.9, 38, 0.5], [5.2, 2, 3], men); // Banheiro Masculino

MSAndar.newBox([[0, 0, 0], 1.4], [11.5, 37, 0.5], [3.4, 3, 3], blue1); // Coordenaçao
MSAndar.newBox([[0, 0, 0], 1.4], [7, 37, 0.5], [4.5, 3, 3], blue5, 1, 205); // 205
MSAndar.newBox([[0, 0, 0], 1.4], [2.5, 37, 0.5], [4.5, 3, 3], blue1, 1, 203); // 203
MSAndar.newBox([[0, 0, 0], 1.4], [-2, 37, 0.5], [4.5, 3, 3], blue4, 1, 201); //201

// Portas da Direita
MSAndar.newBox([[0, 0, 0], 1.4], [33.6, 37, 0.5], [0.5, 0.1, 1], door2); // 218
MSAndar.newBox([[0, 0, 0], 1.4], [32, 37, 0.5], [0.5, 0.1, 1], door2); // 216
MSAndar.newBox([[0, 0, 0], 1.4], [27.5, 37, 0.5], [0.5, 0.1, 1], door2); // ?

MSAndar.newBox([[0, 0, 0], 1.4], [24.5, 38, 0.5], [1, 0.1, 1.6], whitedoor); // Banheiro Feminino
MSAndar.newBox([[0, 0, 0], 1.4], [17, 38, 0.5], [1, 0.1, 1.6], whitedoor); // Banheiro Masculino

MSAndar.newBox([[0, 0, 0], 1.4], [1.5, 37, 0.5], [0.5, 0.1, 1], door2); // 201
MSAndar.newBox([[0, 0, 0], 1.4], [3.3, 37, 0.5], [0.5, 0.1, 1], door2); // 203
MSAndar.newBox([[0, 0, 0], 1.4], [8, 37, 0.5], [0.5, 0.1, 1], door2); // 205
MSAndar.newBox([[0, 0, 0], 1.4], [14, 37, 0.5], [0.5, 0.1, 1], door2); // Coordenação


// Salas da Direita
MSAndar.newBox([[0, 0, 0], 1.4], [33, 28, 0.5], [5, 3, 3], blue2, 1, 217); // 217
MSAndar.newBox([[0, 0, 0], 1.4], [28, 28, 0.5], [5, 3, 3], blue1, 1, 215); // 215
MSAndar.newBox([[0, 0, 0], 1.4], [23, 28, 0.5], [6, 3, 3], blue2); // Laboratório 1
MSAndar.newBox([[0, 0, 0], 1.4], [21, 28, 1], [2, 2, 2.5], blue5); // Servidor

MSAndar.newBox([[0, 0, 0], 1.4], [8.4, 28, 0.5], [6.2, 3, 3], blue5); // Sala dos Professores
MSAndar.newBox([[0, 0, 0], 1.4], [3.2, 28, 0.5], [5.2, 3, 3], blue1, 1, 204); // 204
MSAndar.newBox([[0, 0, 0], 1.4], [-2, 28, 0.5], [5.2, 3, 3], blue4, 1, 202); // 202

// Parede de Cima
MSAndar.newBox([[0, 0, 0], 1.4], [21, 0, 0.5], [0, 28, 3], blue5);

// LADO DIREITOOU

// Salas da Esquerda
MSAndar.newBox([[0, 0, 0], 1.4], [34, 0, 0.5], [4, 3, 3], blue3, 1, 227); // 227
MSAndar.newBox([[0, 0, 0], 1.4], [29, 0, 0.5], [5, 3, 3], blue5, 1, 225); // 225
MSAndar.newBox([[0, 0, 0], 1.4], [25, 0, 0.5], [4, 3, 3], blue2, 1, 223); // 223
MSAndar.newBox([[0, 0, 0], 1.4], [21, 0, 0.5], [4, 3, 3], blue5, 1, 221); // 221

MSAndar.newBox([[0, 0, 0], 1.4], [9.6, 0, 0.5], [5, 3, 3], blue5); // Lab Adobe
MSAndar.newBox([[0, 0, 0], 1.4], [7.5, 0, 0.5], [3, 3, 3], blue1); // Lab Redes
MSAndar.newBox([[0, 0, 0], 1.4], [1, 0, 0.5], [6.5, 3, 3], blue4); // Lab 03

// Portas da Esquerda
MSAndar.newBox([[0, 0, 0], 1.4], [34.8, 0, 0.5], [0.5, 0.1, 1], door2); // 227
MSAndar.newBox([[0, 0, 0], 1.4], [33, 0, 0.5], [0.5, 0.1, 1], door2); // 225
MSAndar.newBox([[0, 0, 0], 1.4], [26, 0, 0.5], [0.5, 0.1, 1], door2); // 223
MSAndar.newBox([[0, 0, 0], 1.4], [24, 0, 0.5], [0.5, 0.1, 1], door2); // 221

MSAndar.newBox([[0, 0, 0], 1.4], [13.5, 0, 0.5], [0.5, 0.1, 1], door2); // Lab Adobe
MSAndar.newBox([[0, 0, 0], 1.4], [9.2, 0, 0.5], [0.5, 0.1, 1], door2); // Lab Redes
MSAndar.newBox([[0, 0, 0], 1.4], [6.8, 0, 0.5], [0.5, 0.1, 1], door2); // Lab 03

// Salas da Direita
MSAndar.newBox([[0, 0, 0], 1.4], [34, -10, 0.5], [4, 3, 3], blue1, 1, 228); // 228
MSAndar.newBox([[0, 0, 0], 1.4], [30, -10, 0.5], [4, 3, 3], blue4, 1, 226); // 226
MSAndar.newBox([[0, 0, 0], 1.4], [26, -10, 0.5], [4, 3, 3], blue5, 1, 224); // 224

MSAndar.newBox([[0, 0, 0], 1.4], [22.8, -10, 0.5], [3.2, 2, 3], girl); // Banheiro Masculino
MSAndar.newBox([[0, 0, 0], 1.4], [18, -10, 0.5], [4.8, 2, 3], men); // Banheiro Masculino

MSAndar.newBox([[0, 0, 0], 1.4], [12, -10, 0.5], [6, 3, 3], blue1, 1, 222); // 222
MSAndar.newBox([[0, 0, 0], 1.4], [6, -10, 0.5], [6, 3, 3], blue4, 1, 220); // 220
//MSAndar.newBox([[0, 0, 0], 1.4], [1, -10, 0.5], [5, 3, 3], blue1); // Espaço Vazio

MSAndar.newBox([[0, 0, 0], 1.4], [-2, -10, 0.5], [3, 13, 3], blue5); // Auditorio

MSAndar.setupRooms();
