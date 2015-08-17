module.exports = function () {
	this.light = new THREE.PointLight(0xffffff);
	this.light.position.set(0, 250, 0);
	this.scene.add(this.light);
};
