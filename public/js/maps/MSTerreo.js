// *************************************************** //
// * Terreo - Mundo Senai **************************** //
// * Ace Graphics ************************************ //
// *************************************************** //

var Cores = require('./Cores');

module.exports = function (Ace, Canvas) {
	
	var MSTerreo = new Ace(Canvas, {
		scale: 8,
		originY: 0
	});

	// Chão
	MSTerreo.newBox(1.4, [-2, -8, 0], [55, 68, 0.5],  Cores.chaoBranco);

	//BLOCO A (lado esquerdo)
	
	//corredor
	/*MSTerreo.newBox(1.4, [21, 36.2, 0],  [0.5, 12.8, 0],  Cores.azulzinho);
	MSTerreo.newBox(1.4, [17, 36.2, 0],  [0.5, 12.8, 0],  Cores.azulzinho);
	MSTerreo.newBox(1.4, [12, 36, 0],  [0.5, 12.8, 0],  Cores.azulzinho);
	MSTerreo.newBox(1.4, [6, 36, 0],  [0.5, 12.8, 0],  Cores.azulzinho); */
	MSTerreo.newBox(1.4, [-1.8, 49, 0],  [55.5, 5, 0],  Cores.preto);
	MSTerreo.newBox(1.4, [22, -8, 0],  [3, 57, 0],  Cores.preto);
	
	
	//Salas 
	MSTerreo.newBox(1.4, [40, 35, 0.5], [12, 25, 4],  Cores.salaCinza)
		.newRoom(1106)
		.appendText('300 Roboto 15px', '#000', 'Sala de Pintura', [-10, -30]); // Sala Pintura
	MSTerreo.newBox(1.4, [27, 54, 0.5], [4, 5, 4],  Cores.banheiroRosa)
		.newRoom(1100)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Feminino', [115, 14]); // banh femin
	MSTerreo.newBox(1.4, [23, 54, 0.5], [4, 5, 4],  Cores.banheiroAzul)
		.newRoom(1101)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Masculino', [115, 14]); // banh masc
	MSTerreo.newBox(1.4, [25, 39, 0.5], [8, 8, 4],  Cores.salaBranca)
		.newRoom(1104)
		.appendText('300 Roboto 15px', '#000', 'Elevador', [15, 40]); //elevador+sala aleatoria
	MSTerreo.newBox(1.4, [18, 54, 0.5], [5, 6, 4],  Cores.salaCinza);
	MSTerreo.newBox(1.4, [14, 54, 0.5], [4, 6, 4],  Cores.salaBranca);
	MSTerreo.newBox(1.4, [10, 54, 0.5], [4, 6, 4],  Cores.salaCinza);
	MSTerreo.newBox(1.4, [6, 54, 0.5], [4, 6, 4],  Cores.salaBranca);
	MSTerreo.newBox(1.4, [2, 54, 0.5], [4, 6, 4],  Cores.salaCinza);
	MSTerreo.newBox(1.4, [-2, 54, 0.5], [4, 6, 4],  Cores.salaBranca);
	
	//linhas verdes
	MSTerreo.newBox(1.4, [16.5, 40, 0],  [0.5, 9, 0.1],  Cores.azulzinho)
		.newRoom(1114)
		.appendText('300 Roboto 15px', '#000', 'Sidnei', [10, -30])
		.appendText('300 Roboto 15px', '#000', 'Yamaha', [-20, 5]);
	MSTerreo.newBox(1.4, [10, 40, 0],  [0.5, 9, 0.1],  Cores.azulzinho)
		.newRoom(1113)
		.appendText('300 Roboto 15px', '#000', 'Lab do Câmbio', [50, -30]);
	MSTerreo.newBox(1.4, [3, 40, 0],  [0.5, 9, 0.1],  Cores.azulzinho)
		.newRoom(1112)
		.appendText('300 Roboto 15px', '#000', 'Exposição Fiat', [10, -30]);
	
	//portas
	MSTerreo.newBox(1.4, [-1.2, 53.5, 0.5], [1, 0.1, 1.5],  Cores.portaMarrom);
	MSTerreo.newBox(1.4, [3, 53.5, 0.5], [1, 0.1, 1.5],  Cores.portaMarrom);
	MSTerreo.newBox(1.4, [7, 53.5, 0.5], [1, 0.1, 1.5],  Cores.portaMarrom);
	MSTerreo.newBox(1.4, [10.5, 53.5, 0.5], [1, 0.1, 1.5],  Cores.portaMarrom);
	MSTerreo.newBox(1.4, [15, 53.5, 0.5], [1, 0.1, 1.5],  Cores.portaMarrom);
	MSTerreo.newBox(1.4, [20, 53.5, 0.5], [1, 0.1, 1.5],  Cores.portaMarrom);
	MSTerreo.newBox(1.4, [25, 54, 0.5], [1, 0.1, 1.5],  Cores.salaBranca); // portas banheiro
	MSTerreo.newBox(1.4, [29, 54, 0.5], [1, 0.1, 1.5],  Cores.salaBranca); // portas banheiro
	MSTerreo.newBox(1.4, [27.4, 43.5, -2], [0, 3, 2],  Cores.salaBranca); //porta elevador
	MSTerreo.newBox(1.4, [42.5, 51.8, -2], [0, 4, 3],  Cores.salaBranca); //porta pintura

	
	//parede
	MSTerreo.newBox(1.4, [-2, 35, 0.5], [55, 0.1, 8],  Cores.salaCinza);
	
	//portões
	MSTerreo.newBox(1.4, [-1, 34.8, 0.5], [4.5, 0.2, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [5, 34.8, 0.5], [4.5, 0.2, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [11.5, 34.8, 0.5], [4.5, 0.2, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [22, 34.8, 0.5], [2, 0.2, 2],  Cores.banheiroAzul);
	MSTerreo.newBox(1.4, [36, 34.8, 0.5], [4.5, 0.2, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [45, 34.8, 0.5], [4.5, 0.2, 3],  Cores.branco);
	

	
	//BLOCO B (lado direito)

	
	//parede
	MSTerreo.newBox(1.4, [-2, 20, 0.5],  [55, 0.1, 8],  Cores.salaCinza);

	//Portoes
	MSTerreo.newBox(1.4, [-1, 20.5, 0], [4, 0.1, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [5, 20.5, 0],  [4, 0.1, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [11.5, 20.5, 0],  [4, 0.1, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [22.5, 20.5, 0],  [2, 0.1, 2],  Cores.banheiroAzul);
	MSTerreo.newBox(1.4, [36, 20.5, 0],  [4, 0.1, 3],  Cores.branco);
	MSTerreo.newBox(1.4, [45, 20.5, 0],  [4, 0.1, 3],  Cores.branco);
	
	
	MSTerreo.newBox(1.4, [24.7, 8, 0.5], [11, 12, 6],  Cores.salaCinza); //recepção e salinha aleatoria
	
	//linhas verdes
	MSTerreo.newBox(1.4, [16.5, 8.2, 0],  [0.5, 12, 0.1],  Cores.azulzinho)
		.newRoom(1111)
		.appendText('300 Roboto 15px', '#000', 'Oficina Interativa', [20, -35])
		.appendText('300 Roboto 15px', '#000', 'Oficina Interativa', [-20, 0]); 
	MSTerreo.newBox(1.4, [10, 8.2, 0],  [0.5, 12, 0.1],  Cores.azulzinho)
		.newRoom(1110)
		.appendText('300 Roboto 15px', '#000', 'Pneumática', [10, -40]);
	MSTerreo.newBox(1.4, [3, 8.2, 0],  [0.5, 12, 0.1],  Cores.azulzinho)
		.newRoom(1110)
		.appendText('300 Roboto 15px', '#000', '', [0, -35]);

	MSTerreo.newBox(1.4, [16.5, -8, 0],  [0.5, 12, 0.1],  Cores.azulzinho)
		.newRoom(1109)
		.appendText('300 Roboto 15px', '#000', 'Acessórios', [0, -35])
		.appendText('300 Roboto 15px', '#000', 'Motor Diesel', [-30, 0]);
	MSTerreo.newBox(1.4, [10, -8, 0],  [0.5, 12, 0.1],  Cores.azulzinho)
		.newRoom(1108)
		.appendText('300 Roboto 15px', '#000', 'Motor Ciclo Otto', [10, -40]);
	MSTerreo.newBox(1.4, [3, -8, 0],  [0.5, 12, 0.1],  Cores.azulzinho)
		.newRoom(1107)
		.appendText('300 Roboto 15px', '#000', 'Montagem PCDs', [10, -30]);
	
	//corredor preto
	MSTerreo.newBox(1.4, [-1.5, 4, -0.2],  [55.1, 5, -0.1],  Cores.preto);
	
	//salinhas lado direito
	MSTerreo.newBox(1.4, [44.7, -8.5, 0.5], [10, 12, 5],  Cores.salaCinza);
	MSTerreo.newBox(1.4, [34.7, -8.5, 0.5], [10, 12, 5],  Cores.salaBranca);
	MSTerreo.newBox(1.4, [28.7, -8.5, 0.5], [6.5, 8, 5],  Cores.banheiroRosa)
		.newRoom(1102)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Feminino', [-60, -40]); // banh femin
	MSTerreo.newBox(1.4, [24.7, -8.5, 0.5], [6, 8, 5],  Cores.banheiroAzul)
		.newRoom(1103)
		.appendText('300 Roboto 15px', '#000', 'Banheiro Masculino', [-50, -50]); // banh masc


	//bloco meio
	MSTerreo.newBox(1.4, [24.6, 28, 0.5], [8, 7, 8],  Cores.salaCinza)
		.newRoom(1105)
		.appendText('300 Roboto 15px', '#000', 'Escada', [30, 10]);
	//MSTerreo.newBox(1.4, [27.4, 33.8, -2], [0, 3.5, 5],  Cores.banheiroAzul);

	MSTerreo.setupRooms();
};
