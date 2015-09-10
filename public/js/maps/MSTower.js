// *************************************************** //
// * Tower - Mundo Senai **************************** //
// * Ace Graphics ************************************ //
// *************************************************** //

var Cores = require('./Cores');

module.exports = function (Ace, Canvas) {
	
	var MSTower = new Ace(Canvas, {
		scale: 8,
		originY: 0
	});
	
	// Chão
	MSTower.newBox(1.4, [-2, -8, 0.10], [55, 68, 0.5],  Cores.chaoBranco);
		//.newRoom(1)
		//.appendImg('../img/lalala.jpg', [1, 1], 50, 50);


	//grama
	MSTower.newBox(1.4, [-2.5, 52, 1], [56, 8, 0.1], Cores.grama3);
	MSTower.newBox(1.4, [32, -8, 1], [21, 35, 0.1], Cores.grama3);

	//senai
	MSTower.newBox(1.3, [32, 40, 1], [18, 10, 9], Cores.salaCinza);
	MSTower.newBox(1.4, [32, 23, 1], [18, 11, 9], Cores.salaCinza);
	MSTower.newBox(1.3, [38, 30, 2.5], [19, 15, 0.1], Cores.senai);
	MSTower.newBox(1.3, [38, 44.5, 2.5], [19, 13, 0.1], Cores.senai);

	
	//parquinho
	MSTower.newBox(1.4, [10, 28, 1], [11, 20, 0.1], Cores.grama3);
	MSTower.newBox(1.4, [10, 18, 1], [15, 10, 0.1], Cores.grama3);
	MSTower.newBox(1.4, [10, 4, 1], [15, 20, 0.1], Cores.playground)
		.newRoom(2)
		.appendImg('../img/play.png', [20,10], 120, 90);


	
	//tower
	MSTower.newBox(1.4, [14, 42, 1], [4, 4, 15], Cores.tower);
	MSTower.newBox(1.4, [13, 34, 1], [5, 5, 3], Cores.salaCinza);
	MSTower.newBox(1.4, [14, 42, 13], [4, 4, 3], Cores.salaBranca)
		//.newRoom(3)
		//.appendText('300 Roboto 15px', '#00f', 'SENAI', [18, 5]);



	// escaada
	MSTower.newBox(1.4, [28, 39, 2], [2, 1, 0.4], Cores.escada);
	MSTower.newBox(1.4, [28, 39.8, 2.5], [2, 1, 0.4], Cores.escada);
	MSTower.newBox(1.4, [28, 40.6, 3], [2, 1, 0.4], Cores.escada);
	MSTower.newBox(1.4, [28, 41.2, 3.5], [2, 1, 0.4], Cores.escada);
	MSTower.newBox(1.4, [28, 42, 4], [2, 1, 0.4], Cores.escada);
	MSTower.newBox(1.4, [28, 42.8, 4.5], [2, 1 , 0.4], Cores.escada);
	MSTower.newBox(1.4, [29, 43.6, 4], [3.5, 3.5, 0.2], Cores.escada);
	MSTower.newBox(1.4, [29, 44, 0], [0.1, 0.1, 4], Cores.escada);
	MSTower.newBox(1.4, [29, 46, 0], [0.1, 0.1, 4], Cores.escada);

	// escaada direita
	MSTower.newBox(1.4, [39, 21, 0], [1, 2, 0.4], Cores.escada);
	MSTower.newBox(1.4, [39.8, 21, 0.5], [1, 2, 0.4], Cores.escada);
	MSTower.newBox(1.4, [40.6, 21, 1], [1, 2, 0.4], Cores.escada);
	MSTower.newBox(1.4, [41.2, 21, 1.5], [1, 2, 0.4], Cores.escada);
	MSTower.newBox(1.4, [42, 21, 2], [1, 2, 0.4], Cores.escada);
	MSTower.newBox(1.4, [42.8, 21, 2.5], [1, 2 , 0.4], Cores.escada);
	MSTower.newBox(1.4, [44, 21, 2.5], [3.5, 3.5, 0.2], Cores.escada);
	MSTower.newBox(1.4, [45, 21.5, -2], [0.1, 0.1, 4], Cores.escada);
	MSTower.newBox(1.4, [48, 21.5, -2], [0.1, 0.1, 4], Cores.escada);

	//portas
	MSTower.newBox(1.4, [32, 44.5, 5], [0.1, 1, 1.6], Cores.salaBranca);
	MSTower.newBox(1.4, [32, 29.5, 1], [0.1, 1.5, 2.5], Cores.salaBranca);
	MSTower.newBox(1.4, [43.5, 22, 5], [1, 0.1, 1.6], Cores.salaBranca);
	





//cercas horizontais
	MSTower.newBox(1.4, [24, 4, 1], [0.1, 0.1, 3], Cores.verde); //cercas baixo
	MSTower.newBox(1.4, [23, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [22, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [21, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [20, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [19, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [18, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [17, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [16, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [15, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [14, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [13, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [12, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [11, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [10, 4, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [24, 24, 1], [0.1, 0.1, 3], Cores.verde); //cercas cima2
	MSTower.newBox(1.4, [23, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [22, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [21, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [20, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [19, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [18, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [17, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [16, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [15, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [14, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [13, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [12, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [11, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [24, 28, 1], [0.1, 0.1, 3], Cores.verde); //cercas cima1
	MSTower.newBox(1.4, [23, 28, 1], [0.1, 0.1, 3], Cores.verde); 
	MSTower.newBox(1.4, [22, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [21, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [20, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [19, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [18, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [17, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [16, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [15, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [14, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [13, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [12, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [11, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 28, 1], [0.1, 0.1, 3], Cores.verde);

	//cerca direita
	MSTower.newBox(1.4, [25, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 27, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 26, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 25, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 23, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 22, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 21, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 20, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 19, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 18, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 17, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 16, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 15, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 14, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 13, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 12, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 11, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 10, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 9, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 8, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 7, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 6, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 5, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [25, 4, 1], [0.1, 0.1, 3], Cores.verde);

	//cerca esquerda
	MSTower.newBox(1.4, [10, 28, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 27, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 26, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 25, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 24, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 23, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 22, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 21, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 20, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 19, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 18, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 17, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 16, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 15, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 14, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 13, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 12, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 11, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 10, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 9, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 8, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 7, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 6, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 5, 1], [0.1, 0.1, 3], Cores.verde);
	MSTower.newBox(1.4, [10, 4, 1], [0.1, 0.1, 3], Cores.verde);



	MSTower.setupRooms();
};
