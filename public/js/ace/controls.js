module.exports = function () {
	this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
};
