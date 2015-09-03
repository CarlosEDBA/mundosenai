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
