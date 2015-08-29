var ReverseI = ReverseI || function (ACE2D, canvas) {
	this.ACE2D = ACE2D;
	this.canvas = canvas;
	this.counter = 0;

	this.scale = ACE2D.isomer.scale;
	this.angle = ACE2D.isomer.angle;
	this.originX = ACE2D.isomer.originX;
	this.originY = ACE2D.isomer.originY;
	this.transformation = ACE2D.isomer.transformation;

	this.ReverseShape;

	this.Color = ACE2D.Color;
	this.Path = ACE2D.Path;
	this.Point = ACE2D.Point;
	this.Shape = ACE2D.Shape;
	this.Vector = ACE2D.Vector;
};

ReverseI.prototype.setCounter = function () {
	this.counter += 1;
};

ReverseI.prototype.getCounter = function () {
	return this.counter;
};

ReverseI.prototype.setShape = function (shape) {
	this.ReverseShape = shape;
};

ReverseI.prototype.init = function (callback) {
	var paths = this.ReverseShape.orderedPaths();
	for (var i in paths) {
		if (paths.hasOwnProperty(i)) {
			//console.log(paths[i]);
	        var data = this._addPath(paths[i]);
	        this.setCounter();
	        if (callback) callback(data);
	    }
	}
};

ReverseI.prototype.orderedPaths = function (shape) {
	var paths = shape.slice();

	/**
	* Sort the list of faces by distance then map the entries, returning
	* only the path and not the added "further point" from earlier.
	*/

	return paths.sort(function (pathA, pathB) {
		return depth(pathB) - depth(pathA);
	});
};

ReverseI.prototype.depth = function (path) {
	var i, total = 0;
	for (i = 0; i < path.length; i++) {
		total += depth(path[i]);
	}

	return total / (path.length || 1);
};

ReverseI.prototype._addPath = function (path) {
	return path.points.map(this._translatePoint, this);
};

ReverseI.prototype._calculateTransformation = function () {
	this.transformation = [
		[
			this.scale * Math.cos(this.angle),
			this.scale * Math.sin(this.angle)
	    ],
	    [
			this.scale * Math.cos(Math.PI - this.angle),
			this.scale * Math.sin(Math.PI - this.angle)
	    ]
	];
};

ReverseI.prototype._translatePoint = function (point) {
	var xMap = new this.Point(
			point.x * this.transformation[0][0],
			point.x * this.transformation[0][1]);

		var yMap = new this.Point(
	  		point.y * this.transformation[1][0],
	  		point.y * this.transformation[1][1]);

		var x = this.originX + xMap.x + yMap.x;
		var y = this.originY - xMap.y - yMap.y - (point.z * this.scale);

		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;

		var xDoMouse = ((x * winWidth) / this.canvas.width);
		var yDoMouse = ((y * winHeight) / this.canvas.height);
		//var yDoMouse = ((y * winHeight) / 450) + 150 - this.transformation[0][0];

		/*console.log({
			x: parseInt(x),
			y: parseInt(y),
			xDoMouse: parseInt(xDoMouse),
			yDoMouse: parseInt(yDoMouse)
		});*/

		return {
			x: parseInt(x),
			y: parseInt(y),
			xDoMouse: parseInt(xDoMouse),
			yDoMouse: parseInt(yDoMouse)
		};
};

module.exports = ReverseI;