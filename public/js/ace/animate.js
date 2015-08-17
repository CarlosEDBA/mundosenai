module.exports = function () {
	var dat = this;

	function animate () {
		requestAnimationFrame(animate);
		dat.renderer.render(dat.scene, dat.camera);
	}

	animate();
};
