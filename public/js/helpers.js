module.exports = {
	createBox: function (scene) {
		// Create an array of materials to be used in a cube, one for each side
		var cubeMaterialArray = [];
		// order to add materials: x+,x-,y+,y-,z+,z-
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
		cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );
		var cubeMaterials = new THREE.MeshFaceMaterial( cubeMaterialArray );
		// Cube parameters: width (x), height (y), depth (z), 
		//        (optional) segments along x, segments along y, segments along z
		var cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
		// using THREE.MeshFaceMaterial() in the constructor below
		//   causes the mesh to use the materials stored in the geometry
		cube = new THREE.Mesh( cubeGeometry, cubeMaterials );
		cube.position.set(-100, 100, -300);
		scene.add(cube);
	},

	onWindowResize: function (twoo) {
		twoo.camera.aspect = window.innerWidth / window.innerHeight;
		twoo.camera.updateProjectionMatrix();

		twoo.renderer.setSize(window.innerWidth, window.innerHeight);
		twoo.renderer.render(twoo.scene, twoo.camera);
	},

	addControls: function (twoo) {
		twoo.controls = new THREE.OrbitControls(twoo.camera, twoo.renderer.domElement);
		twoo.controls.addEventListener('change', function () {
			twoo.renderer.render(twoo.scene, twoo.camera);
		});
	}
};