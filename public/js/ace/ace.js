var Ace = Ace || function () {
	this.container;
	this.stats;
	this.camera;
	this.light;
	this.scene;
	this.raycaster;
	this.renderer;
};

Ace.prototype.Scene = require('./scene')();
Ace.prototype.Camera = require('./camera')();
Ace.prototype.Render = require('./render')();
//Ace.prototype.Controls = require('./controls')();
Ace.prototype.Light = require('./light')();
//Ace.prototype.Skybox = require('./skybox');
//Ace.prototype.Fog = require('./fog');
Ace.prototype.Box = require('./box')();
Ace.prototype.Animate = require('./animate')();

module.exports = Ace;
