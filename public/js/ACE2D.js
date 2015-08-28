var ReverseI = require('./ReverseI');

var ACE2D = ACE2D || function (canvas, options) {

	this.isomer = new Isomer(canvas, options);
	this.canvas = document.querySelector('canvas');
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

	this.caixinhas = [];
	this.caixinhasLen = this.caixinhas.length;
};

ACE2D.prototype.setCounter = function () {
	this.counter += 1;
	//console.log(this.counter);
};

ACE2D.prototype.getCounter = function () {
	return this.counter;
};

ACE2D.prototype.newBox = function (position, coord, xyz, color, setCoords, roomNum, callback) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);
	var coords;

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
	if (setCoords) {
		coords = this.setCoords(box);
	}

	// Adiciona Sala
	if (roomNum && roomNum !== 0) {
		var x = [];
		var room = coords.length - 1;

		console.log(room);
		//console.log(coords[room][0]);

		coords[room][0].forEach(function (el, ind, arr) {
			x.push(el.xDoMouse);
		});

		console.log(x);
		this.newRoom(roomNum, x);
	}
};

ACE2D.prototype.setCoords = function (shape) {
	var ReI = new ReverseI(this, this.canvas);
	var ctx = this.canvas.getContext('2d');
	var rect = this.canvas.getBoundingClientRect();

	var faces = [];
	var vertices = [];
	var verticesLen = vertices.length;

	//console.log('Essa é uma caixinha composta de 6 faces de 4 vertices');

	this.caixinhas.push(this.counter);
	this.caixinhasLen = this.counter;

	ReI.setShape(shape);

	ReI.init(function (data) { // Faces
		faces.push(data);
		data.forEach(function (el, ind, arr) { // Vértices

			//vertices.push(el);
			//verticesLen = ind;

			ctx.beginPath();
			ctx.arc(el.x, el.y, 3, 0, 2 * Math.PI, false);
			ctx.fillStyle = "#FF00E1";
			ctx.font = '10px Roboto';
			ctx.fillText('x: ' + el.x, el.x, el.y);
			ctx.fillText('y: ' + el.y, el.x, el.y + 10);
			ctx.fill();
			ctx.stroke();
		});
	});

	this.setCounter();

	this.caixinhas[this.caixinhasLen] = faces;

	//console.log(this.caixinhas);
	//console.log(faces);
	//console.log(vertices);

	return this.caixinhas;
}

ACE2D.prototype.mouseCoords = function () {
	document.addEventListener('mousemove', function (e) {
		var x = e.pageX;
		var y = e.pageY;
		console.log('Mouse Position: x: ' + x + ' - y: ' + y);
	});
};

ACE2D.prototype.newRoom = function (number, x) {
	var room = document.createElement('senai-room');
	room.dataset.number = number;
	room.dataset.x1 = x[0];
	room.dataset.x2 = x[1];
	room.dataset.x3 = x[2];
	room.dataset.x4 = x[3];
	document.body.appendChild(room);
};

ACE2D.prototype.roomMagic = function () {
	var rooms = document.querySelectorAll('senai-room');
	var roomsLen = rooms.length;
	var that = this;

	this.canvas.addEventListener('mousedown', function (e, ACE2D) {
		letsGo(e, this);
	});

	function letsGo (e, ACE2D) {
		var mouseX = e.x;
		var mouseY = e.y;

		for (var i=0; i<roomsLen; i++) {
			if (mouseX > rooms[i].dataset.x1 && mouseX < rooms[i].dataset.x3) {
				console.log('Sala: ' + rooms[i].dataset.number + ' - x: ' + mouseX + ' - y: ' + mouseY);
				console.log(ACE2D);
				that.openModal(rooms[i].dataset.number);
			};
		}
	}
};

ACE2D.prototype.openModal = function (room) {
	var modal = document.querySelector('senai-modal');
	modal.setAttribute('room', room);
	modal.setAttribute('state', 'open');
};

ACE2D.prototype.setupModal = function () {
	var modal = document.querySelector('senai-modal');
	var close = document.querySelector('senai-modal /deep/ .close');

	close.addEventListener('click', toggleModal);

	function toggleModal(e) {
		modal.setAttribute('room', '');
		modal.setAttribute('state', '');
	}
};

module.exports = ACE2D;
