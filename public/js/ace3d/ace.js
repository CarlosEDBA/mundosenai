var lalala = function () {
	var container,
		stats,
		camera,
		light,
		scene,
		raycaster,
		renderer;

		require('./scene')(scene);
		require('./camera')(scene, camera);
		require('./light')(scene, light);
		require('./box')(scene);
		require('./render')(renderer);
		require('./animate')(scene, camera, renderer);
}

var Ace = Ace || function () {
	this.container;
	this.stats;
	this.camera;
	this.light;
	this.scene;
	this.raycaster;
	this.renderer;

	lalala();
};

/*
Ace.prototype.Scene = require('./scene')(scene);
Ace.prototype.Camera = require('./camera')(scene, camera);
Ace.prototype.Light = require('./light')(scene, light);
//Ace.prototype.Skybox = require('./skybox')(scene);
//Ace.prototype.Fog = require('./fog')(scene);
Ace.prototype.Box = require('./box')(scene);
Ace.prototype.Render = require('./render')(renderer);
Ace.prototype.Animate = require('./animate')(scene, camera, renderer);
//Ace.prototype.Controls = require('./controls')(camera, renderer, controls);
*/

module.exports = Ace;
