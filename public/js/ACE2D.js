var ReverseI = require('./ReverseI');

var ACE2D = ACE2D || function (canvas, options) {

	this.isomer = new Isomer(canvas, options);
	this.canvas = canvas;
	this.ctx = canvas.getContext('2d');
	this.rect = canvas.getBoundingClientRect();
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
};

ACE2D.prototype.getCounter = function () {
	return this.counter;
};

ACE2D.prototype.newBox = function (rotate, coord, xyz, color, setCoords, room, msg, msgPos, callback) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);
	var coords;

	box = (rotate) ? box
		.rotateX(this.Point(rotate[0][1], rotate[0][1], rotate[0][1]), rotate[1]/10)
		.rotateY(this.Point(rotate[0][2], rotate[0][2], rotate[0][2]), rotate[1]/10)
		.rotateZ(this.Point(rotate[0][3], rotate[0][3], rotate[0][3]), rotate[1]/10) : box;

	if (callback) {
		this.isomer.add(box, color);
		callback(this, box);
	} else {
		this.isomer.add(box, color);
	}

	// Grava coordenadas
	if (setCoords) {
		coords = this.setCoords(box);
		// Adiciona Sala
		if (room) {
			var x = [];
			var y = [];	
			var xm = [];
			var ym = [];
			var currentRoom = coords.length - 1;

			coords[currentRoom][0].forEach(function (el, ind, arr) {
				x.push(el.x);
				xm.push(el.xDoMouse);
			});
			coords[currentRoom][1].forEach(function (el, ind, arr) {
				y.push(el.y);
				ym.push(el.yDoMouse);
			});

			if (msg && msgPos) {
				this.newRoom(room, msg, x, y, xm, ym);
				console.log('lalala');
				//this.printMsg(msg, { x: x, y: y }, { x: msgPos[0], y: msgPos[1] });
			} else {
				this.newRoom(room, null, x, y, xm, ym);
			}

			this.printRoomNum(room);
		}
	}

	return box;
};

ACE2D.prototype.setCoords = function (shape) {
	var that = this;
	var ReI = new ReverseI(this, this.canvas);
	var ctx = this.ctx;
	var rect = this.rect;

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
/*			ctx.beginPath();
			ctx.arc(el.x, el.y, 2.5, 0, 1.5 * Math.PI, false);
			ctx.fillStyle = "#212121";
			ctx.font = '8px Roboto';
			ctx.fillText('x: ' + el.x, el.x + 5, el.y - 2);
			ctx.fillText('y: ' + el.y, el.x + 5, el.y + 6);
			ctx.fill();
			ctx.stroke();*/
		});
	});

	this.setCounter();

	this.caixinhas[this.caixinhasLen] = faces;

	//console.log(this.caixinhas);
	//console.log(faces);
	//console.log(vertices);

	return this.caixinhas;
};

ACE2D.prototype.newRoom = function (roomNum, msg, x, y, xm, ym) {
	var room = document.createElement('senai-room');
	if (msg) room.dataset.msg = msg;
	room.dataset.room = roomNum;
	room.dataset.x1 = x[0];
	room.dataset.x2 = x[1];
	room.dataset.x3 = x[2];
	room.dataset.x4 = x[3];
	room.dataset.y1 = y[0];
	room.dataset.y2 = y[1];
	room.dataset.y3 = y[2];
	room.dataset.y4 = y[3];
	room.dataset.xm1 = xm[0];
	room.dataset.xm2 = xm[1];
	room.dataset.xm3 = xm[2];
	room.dataset.xm4 = xm[3];
	room.dataset.ym1 = ym[0];
	room.dataset.ym2 = ym[1];
	room.dataset.ym3 = ym[2];
	room.dataset.ym4 = ym[3];
	document.body.appendChild(room);
};

ACE2D.prototype.printMsg = function (msg, coords, pos) {
	this.ctx.fillStyle = "#000";
	this.ctx.font = '400 10px Roboto';
	this.ctx.fillText(msg, coords.x + pos.x, coords.y + pos.y);
};

ACE2D.prototype.setupRooms = function () {
	var rooms = document.querySelectorAll('senai-room');
	var roomsLen = rooms.length;
	var that = this;
	var ctx = this.canvas.getContext('2d');

	this.canvas.addEventListener('mousedown', function (e, ACE2D) {
		letsGo(e, this);
	});

	// ClickBox
	/*for (var i=0; i<roomsLen; i++) {
		ctx.fillStyle = "#212121";
		ctx.fillRect(rooms[i].dataset.x1, rooms[i].dataset.y2, 5, 5);
		ctx.fillRect(rooms[i].dataset.x3, rooms[i].dataset.y4, 5, 5);
	};*/

	function letsGo (e, ACE2D) {
		var mouseX = e.x;
		var mouseY = e.y;

		[].forEach.call(rooms, function (el, ind, arr) {
			if (
				mouseX > el.dataset.xm1 &&
				mouseX < el.dataset.xm3 &&
				mouseY > el.dataset.ym2 &&
				mouseY < el.dataset.ym4)
			{
				console.log('Sala: ' + el.dataset.room + ' - x: ' + mouseX + ' - y: ' + mouseY);
				//console.log(ACE2D);
				that.openModal(el.dataset.room);
			};
		});
	}
};

ACE2D.prototype.printRoomNum = function (roomNum) {
	var room = document.querySelector('[data-room="' + roomNum + '"]');
	var ctx = this.canvas.getContext('2d');
	var x = parseInt(room.dataset.x2) - 20;
	var y = parseInt(room.dataset.y1) - 5;
	ctx.fillStyle = "#000";
	ctx.font = '400 10px Roboto';
	ctx.fillText(room.dataset.room, x, y);
	//console.log(room);
};

ACE2D.prototype.openModal = function (room) {
	var modal = document.querySelector('senai-modal');
	modal.setAttribute('room', room);
	modal.setAttribute('state', 'open');
};

module.exports = ACE2D;
