var ACE2D = ACE2D || function (canvas, options) {

	this.canvas = new Isomer(canvas, options);
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

};

ACE2D.prototype.newBox = function (coord, xyz, color, pointIt, callback) {
	var box = this.Shape.Prism(new this.Point(coord[0], coord[1], coord[2]), xyz[0], xyz[1], xyz[2]);

	if (callback) {
		this.canvas.add(box, color);
		callback(this, box);
	} else {
		this.canvas.add(box, color);
	}
	
	if (pointIt) {
		this.pointIt(box);
	}
};

ACE2D.prototype.init = function (shape) {
	var paths = shape.orderedPaths();
	    for (var i in paths) {
	      if (paths.hasOwnProperty(i)) {
	      	console.log(paths[i]);
	        _addPath(paths[i]);
	      }
	    }
};

ACE2D.prototype.pointIt = function (shape) {
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");
	var TRANSFORMATION = [];
	var SCALE = this.canvas.scale;
	var ANGLE = this.canvas.angle;
	var originX = this.canvas.originX;
	var originY = this.canvas.originY;

	var Point = Isomer.Point;
	var Path = Isomer.Path;
	var Shape = Isomer.Shape;
	var Vector = Isomer.Vector;

	function init (shape) {
		var paths = shape.orderedPaths();
	    for (var i in paths) {
	      if (paths.hasOwnProperty(i)) {
	      	console.log(paths[i]);
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
			console.log(i)
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

		var x4K = 3840;
		var y4K = 2160;
		var xNot = 1366;
		var yNot = 768;

		var xDoMouse = x4K - xNot - x;
		var yDoMouse = y4K - yNot - y;

		console.log('x: ' + x);
		console.log('y: ' + y);

		ctx.beginPath();
		ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
		ctx.fillStyle = "#FF00E1";
		ctx.font = '10px Roboto';
		ctx.fillText('x: ' + parseInt(x), x, y);
		ctx.fillText('y: ' + parseInt(y), x, y + 10);
		ctx.fill();
		ctx.stroke();
		//ctx.fillRect(x, y, 12, 12);

		//return new Point(x, y);
	}

	_calculateTransformation();
	init(shape);
}

module.exports = ACE2D;
