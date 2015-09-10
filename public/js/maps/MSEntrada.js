// *************************************************** //
// * Entrada - Mundo Senai *************************** //
// * Ace Graphics ************************************ //
// *************************************************** //

var Cores = require('./Cores');

module.exports = function (Ace, Canvas) {
	
	var MSEntrada = new Ace(Canvas, {
		scale: 11,
		originY: 0
	});

	MSEntrada.newBox(1.4, [-2, -8, 0], [42, 50, 0.5], Cores.preto); // Chão
	MSEntrada.newBox(1.4, [11, -8, 0.5], [29, 50, 0.1], Cores.grama); // The Big Grama

	//MSEntrada.newBox(1.4, [12, 40, 0.5], [28, 2, 0.1], Cores.grama); // Grama esquerda

	//MSEntrada.newBox(1.4, [8.2, 36.5, 0.5], [1, 5, 0.1], Cores.preto); // Passagem da pessoa
	//MSEntrada.newBox(1.4, [2.5, 37, 0.5], [4.5, 5, 0.1], Cores.preto); // Passagem do carro
	//MSEntrada.newBox(1.4, [-0.5, 12, 0.5], [12, 25, 0.1], Cores.preto); // Chão do estacionamento
	//MSEntrada.newBox(1.4, [-1, 10, 0.5], [15, 32, 0.1], Cores.preto); // Chão do estacionamento
	
	/*
	**
	** FIEP
	**
	*/
	MSEntrada.newBox(1.4, [11, 17, 0.5], [29, 24, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [11.3, 17, 0.7], [29, 23.9, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [11.6, 17, 1], [28, 23.6, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [11.9, 17, 1.3], [28, 23.3, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [12.2, 17, 1.6], [27, 23, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [12.5, 17, 1.9], [27, 22.7, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [12.8, 17, 2.2], [26, 22.4, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [13.1, 17, 2.5], [26, 22.1, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [13.4, 17, 2.8], [25, 21.8, 0.1], Cores.grama); // Grama

	MSEntrada.newBox(1.4, [10.5, 36, 0.8], [5.5, 2, 0.1], Cores.preto); // Passarela
	MSEntrada.newBox(1.4, [17, 15, 0.8], [2, 5.5, 0.1], Cores.preto); // Passarela Ginásio

	MSEntrada.newBox(1.4, [14.5, 18.5, 2.4], [25, 19, 0.1], Cores.preto); // Chão

	//MSEntrada.newBox(1.4, [19, 23, 0.5], [20, 12, 6], Cores.salaCinza); // Prédio

	MSEntrada.newBox(1.4, [36, 23, 0.5], [3, 12, 3], Cores.material.white); // Adm
	MSEntrada.newBox(1.4, [33, 23, 0.5], [3, 12, 3], Cores.material.white); // Adm
	MSEntrada.newBox(1.4, [26, 23, 0.5], [7, 12, 3], Cores.salaCinza); // Meio
	MSEntrada.newBox(1.4, [22.5, 23, 0.5], [3.5, 12, 3], Cores.material.white); // Adm
	MSEntrada.newBox(1.4, [19, 23, 0.5], [3.5, 12, 3], Cores.salaCinza); // Biblioteca

	MSEntrada.newBox(1.4, [19, 23, 3.5], [20, 12, 3], Cores.salaCinza); // Topo

	/*
	**
	** Bosque
	**
	*/
	MSEntrada.newBox(1.4, [27, -7.5, 0.5], [12, 24.5, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [27.2, -7.1, 0.7], [11, 24, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [27.4, -6.9, 0.9], [11, 23.5, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [27.6, -6.7, 1.1], [11, 23, 0.1], Cores.grama); // Grama
	MSEntrada.newBox(1.4, [27.8, -6.5, 1.3], [11, 22.5, 0.1], Cores.grama); // Grama

	/*
	**
	** Ponto de Encontro
	**
	*/
	MSEntrada.newBox(1.4, [27, 16.5, 0.8], [2, 3.5, 0.1], Cores.preto); // Passarela Cantina
	MSEntrada.newBox(1.4, [11, 15, 0.5], [29, 2, 0], Cores.preto); // Passarela Meio

	MSEntrada.newBox(1.4, [21, -5, 0.5], [4, 14, 0.1], Cores.material.deepPurple);

	/*
	**
	** Estacionamento
	**
	*/
	MSEntrada.newBox(1.4, [1, 13, 0], [3, 22, 0.1], Cores.material.red); // Carros em Exposição
	MSEntrada.newBox(1.4, [7, 13, 0], [3, 13, 0.1], Cores.material.pink); // 147 Clube
	MSEntrada.newBox(1.4, [7, 26, 0], [3, 9, 0.1], Cores.material.purple); // G4 Clube

	// Ginásio
	MSEntrada.newBox(1.4, [0, -6, 0.5], [10, 16, 6], Cores.salaCinza);

	/*
	**
	** Pilares
	**
	*/

	for (var i=-1.5; i<40; i++) {
		MSEntrada.newPillar(1.4, [i, -7.5, 0.3], [0.3, 0.3, 3.2], Cores.salaCinza); // Esquerda
	}

	for (var i=-1.5; i<2; i++) {
		MSEntrada.newPillar(1.4, [i, 41.5, 0.3], [0.3, 0.3, 3.2], Cores.salaCinza); // Direita - 1ª parte
	}

	MSEntrada.newPillar(1.4, [7.5, 41.5, 0.3], [0.3, 0.3, 3.2], Cores.salaCinza); // Direita - Meio

	for (var i=10; i<28; i++) {
		MSEntrada.newPillar(1.4, [i, 41.5, 0.3], [0.3, 0.3, 3.2], Cores.salaCinza); // Direita - 2ª parte
	}

	MSEntrada.newBox(1.4, [28, 41.6, 0.5], [4, 0.1, 3], Cores.azulzinho); // Portão Sesi

	for (var i=32.5; i<40; i++) {
		MSEntrada.newPillar(1.4, [i, 41.5, 0.3], [0.3, 0.3, 3.2], Cores.salaCinza); // Direita - 3ª parte
	}

	MSEntrada.newBox(1.4, [2.7, 41.6, 0.5], [4, 0.1, 3], Cores.azulzinho); // Portão
	MSEntrada.newBox(1.4, [8.5, 41.6, 0.5], [1, 0.1, 3], Cores.azulzinho); // Portão Pedestre

	MSEntrada.newBox(1.4, [9.7, 39.5, 0.5], [1, 1.5, 2], Cores.azulzinho); // Casinha Segurança
	MSEntrada.newBox(1.4, [1, 39, 0.5], [1, 1.5, 2], Cores.salaCinza); // Casinha Aleatória

	for (var i=-7.5; i<42; i++) {
		MSEntrada.newPillar(1.4, [-1.5, i, 0.3], [0.3, 0.3, 3.2], Cores.salaCinza);
	}

	MSEntrada.setupRooms();
};
