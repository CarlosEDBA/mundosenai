// *************************************************** //
// * 1º Andar - Mundo Senai ************************** //
// * Ace Graphics ************************************ //
// *************************************************** //

var Cores = require('./Cores');

module.exports = function (Ace, Canvas) {

	var MSAndar = new Ace(Canvas, {
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

	MSAndar.newBox(1.4, [21, -10, 0], [17, 13, 0.5],  Cores.chaoBranco); // Direita Cima
	MSAndar.newBox(1.4, [21, 28, 0], [17, 12, 0.5],  Cores.chaoBranco); // Esquerda Cima
	MSAndar.newBox(1.4, [15, -10, 0], [6, 50, 0.5],  Cores.chaoBranco); // Meio
	MSAndar.newBox(1.4, [-2, 28, 0], [17, 12, 0.5],  Cores.chaoBranco); // Esquerda Baixo
	MSAndar.newBox(1.4, [-2, -10, 0], [17, 13, 0.5],  Cores.chaoBranco); // Direita Baixo

	//MSAndar.newBox(1.4, [-2, -10, 0], [40, 50, 0.5],  Cores.chaoBranco);

	MSAndar.newBox(1.4, [16, 4, -1], [0, 28, 3],  Cores.chaoBranco); // Parede branca de baixo

	// LADO ESQUERDOOO

	// Salas da Esquerda
	MSAndar.newBox(1.4, [32.9, 37, 0.5], [5, 3, 3],  Cores.salaBranca)
		.newRoom(218)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 5]);
		//.appendText('300 Roboto 15px', '#000', 'HU3BR!', [155, 5])
		//.appendImg('../img/nick.png', [50, 50], 55, 50); // 218s
		//
	MSAndar.newBox(1.4, [29.4, 37, 0.5], [3.5, 3, 3],  Cores.salaCinza) // 216
		.newRoom(216)
		.appendRoomNum('300 Roboto 15px', '#000', [13, 7]);
	MSAndar.newBox(1.4, [26.5, 37, 0.5], [3.5, 3, 3],  Cores.salaBranca) // ?
		.newRoom(214)
		.appendRoomNum('300 Roboto 15px', '#000', [15, 6]);

	MSAndar.newBox(1.4, [21.5, 38, 0.5], [5, 2, 3],  Cores.banheiroRosa)
		.newRoom(1000)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Feminino', [115, 22]); // Banheiro Feminino

	MSAndar.newBox(1.4, [20, 37, 0.5], [3, 3, 3],  Cores.banheiroAzul); // Banheiro Masculino pt2
	MSAndar.newBox(1.4, [14.9, 38, 0.5], [5.2, 2, 3],  Cores.banheiroAzul)
		.newRoom(1001)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Masculino', [115, 25]); // Banheiro Masculino

	MSAndar.newBox(1.4, [11.5, 37, 0.5], [3.4, 3, 3],  Cores.salaBranca)
		.newRoom(1002)
		.appendText('300 Roboto 15px', '#000', 'Coordenação', [95, 18]); // Coordenaçao

	MSAndar.newBox(1.4, [7, 37, 0.5], [4.5, 3, 3],  Cores.salaCinza) // 205
		.newRoom(205)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 5]);
	MSAndar.newBox(1.4, [2.5, 37, 0.5], [4.5, 3, 3],  Cores.salaBranca) // 203
		.newRoom(203)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 5]);
	MSAndar.newBox(1.4, [-2, 37, 0.5], [4.5, 3, 3],  Cores.salaCinza) //201
		.newRoom(201)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 5]);

	// Portas da Direita
	MSAndar.newBox(1.4, [33.6, 37, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 218
	MSAndar.newBox(1.4, [32, 37, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 216
	MSAndar.newBox(1.4, [27.5, 37, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // ?

	MSAndar.newBox(1.4, [24.5, 38, 0.5], [1, 0.1, 1.6], whitedoor); // Banheiro Feminino
	MSAndar.newBox(1.4, [17, 38, 0.5], [1, 0.1, 1.6], whitedoor); // Banheiro Masculino

	MSAndar.newBox(1.4, [1.5, 37, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 201
	MSAndar.newBox(1.4, [3.3, 37, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 203
	MSAndar.newBox(1.4, [8, 37, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 205
	MSAndar.newBox(1.4, [14, 37, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // Coordenação


	// Salas da Direita
	MSAndar.newBox(1.4, [33, 28, 0.5], [5, 3, 3],  Cores.salaBranca) // 217
		.newRoom(217)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 7]);

	MSAndar.newBox(1.4, [28, 28, 0.5], [5, 3, 3],  Cores.salaCinza) // 215
		.newRoom(215)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 7]);

	MSAndar.newBox(1.4, [23, 28, 0.5], [6, 3, 3],  Cores.salaBranca)
		.newRoom(1003)
		.appendText('300 Roboto 15px', '#000', 'Lab 1', [25.5, 2.5]); // Laboratório 1

	MSAndar.newBox(1.4, [21, 28, 1], [2, 2, 2.5],  Cores.salaCinza); // Servidor

	MSAndar.newBox(1.4, [8.4, 28, 0.5], [6.2, 3, 3],  Cores.salaBranca); // Sala dos Professores
	MSAndar.newBox(1.4, [3.2, 28, 0.5], [5.2, 3, 3],  Cores.salaCinza) // 204		
		.newRoom(204)
		.appendRoomNum('300 Roboto 15px', '#000', [19, 6]);
	MSAndar.newBox(1.4, [-2, 28, 0.5], [5.2, 3, 3],  Cores.salaBranca) // 202
		.newRoom(202)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 5]);

	MSAndar.newBox(1.4, [21, 10, 0.5], [5, 6, 3],  Cores.verdinho)
		.newRoom(1004)
		.appendText('300 Roboto 15px', '#000', 'Escada', [8, 35]); // Escada

	MSAndar.newBox(1.4, [21, 23, 0.5], [2, 2, 3],  Cores.verdinho)
		.newRoom(1005)
		.appendText('300 Roboto 15px', '#000', 'Elevador', [-25, 10]); // Elevador


	// LADO DIREITOOU

	// Salas da Esquerda
	MSAndar.newBox(1.4, [34, 0, 0.5], [4, 3, 3],  Cores.salaBranca)
		.newRoom(227)
		.appendRoomNum('300 Roboto 15px', '#000', [18, 7]); // 227
	MSAndar.newBox(1.4, [29, 0, 0.5], [5, 3, 3],  Cores.salaCinza) // 225
		.newRoom(225)
		.appendRoomNum('300 Roboto 15px', '#000', [20, 5]);
	MSAndar.newBox(1.4, [25, 0, 0.5], [4, 3, 3],  Cores.salaBranca) // 223
		.newRoom(223)
		.appendRoomNum('300 Roboto 15px', '#000', [18, 7]);
	MSAndar.newBox(1.4, [21, 0, 0.5], [4, 3, 3],  Cores.salaCinza) // 221
		.newRoom(221)
		.appendRoomNum('300 Roboto 15px', '#000', [18, 7]);

	MSAndar.newBox(1.4, [9.6, 0, 0.5], [5, 3, 3],  Cores.salaBranca)
		.newRoom(1006)
		.appendText('300 Roboto 15px', '#000', 'Lab Adobe', [30, 0]); // Lab Adobe

	MSAndar.newBox(1.4, [7.5, 0, 0.5], [3, 3, 3],  Cores.salaCinza)
		.newRoom(1007)
		.appendText('300 Roboto 15px', '#000', 'Lab Redes', [30, 0]); // Lab Redes

	MSAndar.newBox(1.4, [1, 0, 0.5], [6.5, 3, 3],  Cores.salaBranca)
		.newRoom(1008)
		.appendText('300 Roboto 15px', '#000', 'Lab 3', [30, 0]); // Lab 03

	// Portas da Esquerda
	MSAndar.newBox(1.4, [34.8, 0, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 227
	MSAndar.newBox(1.4, [33, 0, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 225
	MSAndar.newBox(1.4, [26, 0, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 223
	MSAndar.newBox(1.4, [24, 0, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // 221

	MSAndar.newBox(1.4, [13.5, 0, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // Lab Adobe
	MSAndar.newBox(1.4, [9.2, 0, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // Lab Redes
	MSAndar.newBox(1.4, [6.8, 0, 0.5], [0.5, 0.1, 1],  Cores.portaMarrom); // Lab 03

	// Salas da Direita
	MSAndar.newBox(1.4, [34, -10, 0.5], [4, 3, 3],  Cores.salaBranca) // 228
		.newRoom(228)
		.appendRoomNum('300 Roboto 15px', '#000', [18, 7]);
	MSAndar.newBox(1.4, [30, -10, 0.5], [4, 3, 3],  Cores.salaCinza) // 226
		.newRoom(226)
		.appendRoomNum('300 Roboto 15px', '#000', [18, 7]);
	MSAndar.newBox(1.4, [26, -10, 0.5], [4, 3, 3],  Cores.salaBranca) // 224
		.newRoom(224)
		.appendRoomNum('300 Roboto 15px', '#000', [18, 7]);

	MSAndar.newBox(1.4, [22.8, -10, 0.5], [3.2, 2, 3],  Cores.banheiroRosa)
		.newRoom(1009)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Feminino', [-30, -30]); // Banheiro Feminino

	MSAndar.newBox(1.4, [18, -10, 0.5], [4.8, 2, 3],  Cores.banheiroAzul)
		.newRoom(1010)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Masculino', [-20, -40]); // Banheiro Masculino

	MSAndar.newBox(1.4, [12, -10, 0.5], [6, 3, 3],  Cores.salaBranca) // 222
		.newRoom(222)
		.appendRoomNum('300 Roboto 15px', '#000', [24, 0]);
	MSAndar.newBox(1.4, [6, -10, 0.5], [6, 3, 3],  Cores.salaCinza) // 220
		.newRoom(220)
		.appendRoomNum('300 Roboto 15px', '#000', [25, 2]);
	//MSAndar.newBox(1.4, [1, -10, 0.5], [5, 3, 3], blue1); // Espaço Vazio

	MSAndar.newBox(1.4, [-2, -10, 0.5], [3, 13, 3],  Cores.salaCinza)
		.newRoom(1011)
		.appendText('300 Roboto 15px', '#000', 'Auditório', [-35, 20]); // Auditorio

	// Parede de Cima
	MSAndar.newBox(1.4, [21, 0, 0.5], [0, 10, 3],  Cores.chaoBranco); // Esquerda
	MSAndar.newBox(1.4, [21, 16, 0.5], [0, 7, 3],  Cores.chaoBranco); // Meio
	MSAndar.newBox(1.4, [21, 25, 0.5], [0, 5, 3],  Cores.chaoBranco); // Direita

	MSAndar.setupRooms();
};
