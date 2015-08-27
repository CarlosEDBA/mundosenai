module.exports = function (scene) {
	var skyBoxGeometry = new THREE.BoxGeometry( 10000, 10000, 10000 );
	// BackSide: render faces from inside of the cube, instead of from outside (default).sadw
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	scene.add(skyBox);
};
