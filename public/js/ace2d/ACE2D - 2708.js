var ReverseI = require('./ReverseI');

var ACE2D = ACE2D || function (canvas, options) {

	this.isomer = new Isomer(canvas, options);
	this.canvas = this.isomer.canvas;
	this.counter = 0;
	this.Point = Isomer.Point;
	this.Path = Isomer.Path;
	this.Shape = Isomer.Shape;
	this.Vector = Isomer.Vector;
	this.Color = Isomer.Color;
	this.colors = {
		black: new this.Color(0, 0, 0),
		white: new this.Color(255, 255, 255),
		red: new this.Color(244, 67, 54),
		pink: new this.Color(233, 30, 99),
		purple: new this.Color(156, 39, 176),
		deeppurple: new this.Color(103, 58, 183),
		indigo: new this.Color(63, 81, 181),
		blue: new this.Color(33, 150, 243),
		lightblue: new this.Color(3, 169, 244),
		cyan: new this.Color(0, 188, 212),
		teal: new this.Color(0, 150, 136),
		green: new this.Color(76, 175, 80),
		lightgreen: new this.Color(139, 195, 74),
		lime: new this.Color(205, 220, 57),
		yellow: new this.Color(255, 235, 59),
		amber: new this.Color(255, 193, 7),
		orange: new this.Color(255, 152, 0),
		deeporange: new this.Color(255, 87, 34),
		brown: new this.Color(121, 85, 72),
		grey: new this.Color(158, 158, 158),
		bluegrey: new this.Color(96, 158, 158)
	};

	document.registerElement('senai-room', { prototype: Object.create(HTMLElement.prototype) });

};

ACE2D.prototype.newBox = function (position, coord, xyz, color, pointIt, roomNum, callback) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);
	var point;

	if (position) { // Esquerda
		if (callback) {
			this.isomer.add(box, color);
			callback(this, box);
		} else {
			this.isomer.add(box, color);
		}
	} else if (!position) { // Direita
		if (callback) {
			this.isomer.add(box
				.rotateZ(this.Point(1.5, 1.5, 0), Math.PI / 12)
			, color);
			callback(this, box);
		} else {
			this.isomer.add(box
				.rotateZ(this.Point(12.5, 12.5, 0), Math.PI / 2.5)
			, color);
		}
	}

	// Grava coordenadas
	if (pointIt) {
		point = this.pointIt(box);
		console.log(point);
	}

	// Adiciona Sala
	if (roomNum && roomNum !== 0) {
		this.newRoom(roomNum, point.x, point.y);
	}
};

ACE2D.prototype.debugC = function () {
	var ReI = new ReverseI(this, this.canvas);
	var ctx = this.canvas.getContext('2d');
	var rect = this.canvas.getBoundingClientRect();

	ReI.init(function (data) {
		console.log(data);
		ctx.beginPath();
		ctx.arc(data.x, data.y, 3, 0, 2 * Math.PI, false);
		ctx.fillStyle = "#FF00E1";
		ctx.font = '10px Roboto';
		ctx.fillText('x: ' + data.x, data.x, data.y);
		ctx.fillText('y: ' + data.y, data.x, data.y + 10);
		ctx.fill();
		ctx.stroke();
		//ctx.fillRect(data.x, data.y, 12, 12);
	});
}

ACE2D.prototype.pointIt = function (shape) {
	// Coisas do Canvas
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");
	var rect = canvas.getBoundingClientRect();
	// Coisas das coordenadas
	var TRANSFORMATION = [];
	var SCALE = this.isomer.scale;
	var ANGLE = this.isomer.angle;
	var originX = this.isomer.originX;
	var originY = this.isomer.originY;
	var counter = this.getCounter();
	var xLalala;
	var yLalala;

	var Point = Isomer.Point;
	var Path = Isomer.Path;
	var Shape = Isomer.Shape;
	var Vector = Isomer.Vector;

	function init (shape) {
		var paths = shape.orderedPaths();
	    for (var i in paths) {
	      if (paths.hasOwnProperty(i)) {
	      	//console.log(paths[i]);
	        _addPath(paths[i]);
	      }
	    }
	}

	function orderedPaths (shape) {
		var paths = shape.slice();

		/**
		* Sort the list of faces by distance then map the entries, returning
		* only the path and not the added "further point" from earlier.
		*/

		return paths.sort(function (pathA, pathB) {
			return depth(pathB) - depth(pathA);
		});
	}

	function depth (path) {
		var i, total = 0;
		for (i = 0; i < path.length; i++) {
			total += depth(path[i]);
	  	}

	  	return total / (path.length || 1);
	}

	function _addPath (path) {
		path.points.map(function (i) {
			//console.log(i)
		});
		path.points.map(_translatePoint);
	}

	function _calculateTransformation () {
	  TRANSFORMATION = [
	    [
	      SCALE * Math.cos(ANGLE),
	      SCALE * Math.sin(ANGLE)
	    ],
	    [
	      SCALE * Math.cos(Math.PI - ANGLE),
	      SCALE * Math.sin(Math.PI - ANGLE)
	    ]
	  ];
	}

	function _translatePoint (point) {
		var xMap = new Point(
			point.x * TRANSFORMATION[0][0],
			point.x * TRANSFORMATION[0][1]);

		var yMap = new Point(
	  		point.y * TRANSFORMATION[1][0],
	  		point.y * TRANSFORMATION[1][1]);

		var x = originX + xMap.x + yMap.x;
		var y = originY - xMap.y - yMap.y - (point.z * SCALE);

		//console.log(point.z);

		var x4K = 3840;
		var y4K = 2160;
		var xNot = 1366;
		var yNot = 768;

		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;

		//console.log(originY);

		//var yDasLagrimas = 550 - xMap.y - yMap.y + (((550 - xMap.y - yMap.y) * 100) / 101);
		//var yDasLagrimas = (((550 - xMap.y - yMap.y) * 100) / 101) + ((69.5 * (((550 - xMap.y - yMap.y) * 100) / 101)) / 100) - 126;
		var yDasLagrimas = y;


		//var xDoMouse = (x * 100) / 87.7;
		//var xDoMouse = (x * 100) / 87.7;
		var xDoMouse = ((x * winWidth) / 1200);
		//var yDoMouse = (y * 100) / 19.2;
		var yDoMouse = ((y * winHeight) / 450) + 150 - TRANSFORMATION[0][0];

		xLalala = parseInt(xDoMouse);
		yLalala = parseInt(yDasLagrimas);

		console.log(counter + ' - x: ' + parseInt(xDoMouse) + ' - y: ' + parseInt(yDoMouse));

		ctx.beginPath();
		ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
		ctx.fillStyle = "#FF00E1";
		ctx.font = '10px Roboto';
		ctx.fillText('x: ' + parseInt(xDoMouse), x, y);
		ctx.fillText('y: ' + parseInt(yDasLagrimas), x, y + 10);
		ctx.fill();
		ctx.stroke();
		//ctx.fillRect(x, y, 12, 12);

		//return new Point(x, y);
	}

	this.setCounter();
	_calculateTransformation();
	init(shape);

	return {
		counter: this.counter,
		x: xLalala,
		y: yLalala
	};
};

ACE2D.prototype.setCounter = function () {
	this.counter += 1;
	//console.log(this.counter);
};

ACE2D.prototype.getCounter = function () {
	return this.counter;
};

ACE2D.prototype.mouseCoords = function () {
	document.addEventListener('mousemove', function (e) {
		var x4K = 3840;
		var y4K = 2160;
		var xNot = 1366;
		var yNot = 768;

		var x = e.pageX;
		var y = e.pageY;

		var xCanvas = (x4K - xNot - x);
		var yCanvas = (y4K - yNot - y);

		console.log('Mouse Position: x: ' + x + ' - y: ' + y);
	});
};

ACE2D.prototype.newRoom = function (number, x, y) {
	var room = document.createElement('senai-room');
	room.dataset.number = number;
	room.dataset.x = x;
	room.dataset.y = y;
	document.body.appendChild(room);
}

ACE2D.prototype.setupModal = function () {
	var modal = document.querySelector('.modal');
	var close = document.querySelector('.modal .close');
	var testes = document.querySelectorAll('.testes button');
	var testesLen = testes.length;

	console.log(testes);

	for (var i=0; i< testesLen; i++) {
		testes[i].addEventListener('click', toggleModal);
	}

	close.addEventListener('click', toggleModal);

	function toggleModal(e) {
		modal.classList.toggle('open');
	}
};

module.exports = ACE2D;
