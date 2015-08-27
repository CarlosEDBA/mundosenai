module.exports = function (scene, light) {
	light = new THREE.PointLight(0xffffff);
	light.position.set(0, 250, 0);
	scene.add(light);
};
