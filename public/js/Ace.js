var Helpers = require('./Helpers');
var ReverseI = require('./ReverseI');

var Ace = Ace || function (canvas, options) {

	this.isomer = new Isomer(canvas, options);
	this.Point = Isomer.Point;
	this.Path = Isomer.Path;
	this.Shape = Isomer.Shape;
	this.Vector = Isomer.Vector;
	this.Color = Isomer.Color;

	this.canvas = canvas;
	this.ctx = canvas.getContext('2d');
	this.rect = canvas.getBoundingClientRect();

	this.shape;
	this.room = 0;
	this.counter = 0;
	this.axis = [];
	this.axisLen = 0;
	this.coords = {};
};

Ace.prototype.setCounter = function () {
	this.counter += 1;
	return this;
};

Ace.prototype.getCounter = function () {
	return this.counter;
};

Ace.prototype.newBox = function (rotation, coord, xyz, color) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);
	var coords;

	box = (rotation) ? box
		.rotateX(this.Point(0, 0, 0), rotation / 10)
		.rotateY(this.Point(0, 0, 0), rotation / 10)
		.rotateZ(this.Point(0, 0, 0), rotation / 10) : box;

	if (typeof(color) === 'string') {
		color = Helpers.hexToRgb(color);
		color = new this.Color(color.r, color.g, color.b);
	};
	
	this.isomer.add(box, color);
	this.shape = box;

	return this;
};

Ace.prototype.getAxis = function () {
	var that = this;
	var ReI = new ReverseI(this, this.canvas);
	var ctx = this.ctx;
	var rect = this.rect;

	var faces = [];
	var vertices = [];
	var verticesLen = vertices.length;

	//console.log('Essa é uma caixinha composta de 6 faces de 4 vertices');

	this.axis = [];
	this.axisLen = 0;
	this.axis.push(this.counter);
	this.axisLen = this.counter;

	ReI.setShape(this.shape);

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

	this.axis[this.axisLen] = faces;
	this.axisLen = this.axis.length;

	return this;
};

Ace.prototype.getCoords = function () {
	var x = [];
	var y = [];	
	var xm = [];
	var ym = [];

	var currentBox = this.axisLen - 1;

	this.axis[currentBox][0].forEach(function (el, ind, arr) {
		x.push(el.x);
		xm.push(el.xDoMouse);
	});
	this.axis[currentBox][1].forEach(function (el, ind, arr) {
		y.push(el.y);
		ym.push(el.yDoMouse);
	});

	this.coords = {
		x: x,
		y: y,
		xMouse: xm,
		yMouse: ym
	};

	return this;
};

Ace.prototype.bundleData = function () {
	this.getAxis();
	this.getCoords();
	return this;
};

Ace.prototype.newRoom = function (room) {
	var senaiRoom = document.createElement('senai-room');

	senaiRoom.dataset.room = room;
	senaiRoom.dataset.x1 = this.coords.x[0];
	senaiRoom.dataset.x2 = this.coords.x[1];
	senaiRoom.dataset.x3 = this.coords.x[2];
	senaiRoom.dataset.x4 = this.coords.x[3];
	senaiRoom.dataset.y1 = this.coords.y[0];
	senaiRoom.dataset.y2 = this.coords.y[1];
	senaiRoom.dataset.y3 = this.coords.y[2];
	senaiRoom.dataset.y4 = this.coords.y[3];
	senaiRoom.dataset.xm1 = this.coords.xMouse[0];
	senaiRoom.dataset.xm2 = this.coords.xMouse[1];
	senaiRoom.dataset.xm3 = this.coords.xMouse[2];
	senaiRoom.dataset.xm4 = this.coords.xMouse[3];
	senaiRoom.dataset.ym1 = this.coords.yMouse[0];
	senaiRoom.dataset.ym2 = this.coords.yMouse[1];
	senaiRoom.dataset.ym3 = this.coords.yMouse[2];
	senaiRoom.dataset.ym4 = this.coords.yMouse[3];

	document.body.appendChild(senaiRoom);

	this.room = room;

	return this;
};

Ace.prototype.appendRoomNum = function (color, font, pos) {
	var currentRoom = document.querySelector('[data-room="' + this.room + '"]');

	var textX = parseInt(currentRoom.dataset.x2) - pos[0];
	var textY = parseInt(currentRoom.dataset.y1) - pos[1];

	this.ctx.fillStyle = color;
	this.ctx.font = font;
	this.ctx.fillText(this.room, textX, textY);

	return this;
};

Ace.prototype.appendText = function (font, color, text, pos) {
	var currentRoom = document.querySelector('[data-room="' + this.room + '"]');
	currentRoom.dataset.text = text;

	var textX = parseInt(currentRoom.dataset.x2) - pos[0];
	var textY = parseInt(currentRoom.dataset.y1) - pos[1];

	this.ctx.fillStyle = color;
	this.ctx.font = font;
	this.ctx.fillText(text, textX, textY);

	return this;
};

Ace.prototype.appendImg = function (img, pos, width, height) {
	var currentRoom = document.querySelector('[data-room="' + this.room + '"]');
	currentRoom.dataset.img = img;

	var image = new Image();
	image.src = img;

	var imgX = parseInt(currentRoom.dataset.x2) - pos[0];
	var imgY = parseInt(currentRoom.dataset.y1) - pos[1];

	this.ctx.imageSmoothingEnabled = true;

	image.onload = function () {
		(width && height) ?
			this.ctx.drawImage(image, imgX, imgY, width, height) :
			this.ctx.drawImage(image, imgX, imgY);
	}.bind(this);

	return this;
};

Ace.prototype.setupRooms = function () {
	var rooms = document.querySelectorAll('senai-room');
	var roomsLen = rooms.length;

	this.canvas.addEventListener('mousedown', clickBox.bind(this));

	function clickBox (e) {
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
				this.openModal(el.dataset.room);
			};
		}, this);
	}

	// draw clickBox
	/*for (var i=0; i<roomsLen; i++) {
		this.ctx.fillStyle = "#212121";
		this.ctx.fillRect(rooms[i].dataset.x1, rooms[i].dataset.y2, 5, 5);
		this.ctx.fillRect(rooms[i].dataset.x3, rooms[i].dataset.y4, 5, 5);
	};*/

	return this;
};

Ace.prototype.openModal = function (room) {
	var modal = document.querySelector('senai-modal');
	modal.setAttribute('room', room);
	modal.setAttribute('state', 'open');
	return this;
};

module.exports = Ace;
