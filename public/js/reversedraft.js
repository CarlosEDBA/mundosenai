var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var TRANSFORMATION = [];
var SCALE = 70;
var ANGLE = Math.PI / 6;
var originX = canvas.width / 2;
var originY = canvas.height * 0.9;

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
	console.log(path.points.map(_translatePoint));
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
	ctx.arc(x, y, 6, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#FF00E1";
	ctx.fill();
	//ctx.fillRect(x, y, 12, 12);

	//return new Point(x, y);
}

_calculateTransformation();
