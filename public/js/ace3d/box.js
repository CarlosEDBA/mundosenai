module.exports = function (scene) {
	var geometry = new THREE.BoxGeometry(600, 600, 100);
	var geometry2 = new THREE.BoxGeometry(100, 600, 100);

	var material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: false
    });

	var cubeMaterialArray = [];
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
	cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
	cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
	cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
	cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
	cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );
	var cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray);

	var mesh = new THREE.Mesh(geometry, cubeMaterials);
    var mesh2 = new THREE.Mesh(geometry2, cubeMaterials);

    //mesh.rotation.x = 5;
    //mesh2.position.x = 250;

    scene.add(mesh);
    scene.add(mesh2);
};
