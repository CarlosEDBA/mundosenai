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
	MSTerreo.newBox(1.4, [-2, -8, 0], [42, 50, 0.5],  Cores.chaoBranco);

	// Direita
	MSTerreo.newBox(1.4, [-2, -8, 0.5], [42, 15, 15],  Cores.azulzinho);
	// Esquerda
	MSTerreo.newBox(1.4, [-2, 27, 0.5], [42, 15, 15],  Cores.azulzinho);

	// Telhado
	MSTerreo.newBox(1.4, [-2, -8, 15], [42, 25, 0.5],  Cores.chaoBranco);

/*	// Chão
	MSTerreo.newBox(1.4, [-2, -8, 0], [42, 50, 0.5],  Cores.chaoBranco);

	// Direita
	MSTerreo.newBox(1.4, [-2, 41.5, 0.5], [30, 0.5, 0.5],  Cores.azulzinho);

	MSTerreo.newBox(1.4, [-2, 27, 0.5], [2, 0.5, 0.5],  Cores.azulzinho);
	MSTerreo.newBox(1.4, [6, 27, 0.5], [3, 0.5, 0.5],  Cores.azulzinho);
	MSTerreo.newBox(1.4, [14, 27, 0.5], [3, 0.5, 0.5],  Cores.azulzinho);

	MSTerreo.newBox(1.4, [-2, 27, 0.5], [0.5, 15, 0.5],  Cores.azulzinho);

	// Esquerda
	MSTerreo.newBox(1.4, [-2, -8, 0.5], [30, 0.5, 0.5],  Cores.azulzinho);

	MSTerreo.newBox(1.4, [-2, 7, 0.5], [2, 0.5, 0.5],  Cores.azulzinho);
	MSTerreo.newBox(1.4, [6, 7, 0.5], [3, 0.5, 0.5],  Cores.azulzinho);
	MSTerreo.newBox(1.4, [14, 7, 0.5], [3, 0.5, 0.5],  Cores.azulzinho);

	MSTerreo.newBox(1.4, [-2, -8, 0.5], [0.5, 15, 0.5],  Cores.azulzinho);*/


	MSTerreo.setupRooms();
};
