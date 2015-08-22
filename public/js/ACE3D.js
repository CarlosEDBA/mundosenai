var ACE3D = function () {
	this.lalala = "lalala";
	this.container;
	this.stats;
	this.camera;
	this.scene;
	this.raycaster;
	this.renderer;
	this.controls;
};

ACE3D.prototype.helper = {
	webglAvailable: function () {
		try {
			var canvas = document.createElement('canvas');
			return !!( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
		} catch (e) {
			return false;
		}
	}
}

ACE3D.prototype.newScene = function () {
	this.scene = new THREE.Scene();
}

ACE3D.prototype.newCamera = function (VIEW_ANGLE, ASPECT, NEAR, FAR) {
	this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	this.scene.add(this.camera);
}

ACE3D.prototype.newLight = function () {
	this.light = new THREE.DirectionalLight( 0xffffff, 1 );
	this.light.position.set(0, 250, 0);
	this.scene.add(this.light);
}

ACE3D.prototype.setRaycaster = function (raycaster, callback) {
	this.raycaster = raycaster;
	callback();
}

ACE3D.prototype.setStats = function (stats, callback) {
	this.stats = stats;
	callback();
}

ACE3D.prototype.setRenderer = function (renderer, callback) {
	this.renderer = renderer;
	callback();
}

ACE3D.prototype.render = function (SCREEN_WIDTH, SCREEN_HEIGHT) {
	if (this.helper.webglAvailable()) {
    	this.renderer = new THREE.WebGLRenderer({ antialias: true });
	} else {
    	this.renderer = new THREE.CanvasRenderer();
	}

	this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

	document.body.appendChild(this.renderer.domElement);
}

ACE3D.prototype.animate = function (that) {
	requestAnimationFrame(this.__proto__.animate);
	that.renderer.render(that.scene, that.camera);
	/*function animate () {
		requestAnimationFrame(animate);
		
	}
	animate();*/
}

ACE3D.prototype.addControls = function () {
	this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
}

ACE3D.prototype.callback = function (callback) {
	callback();
}

module.exports = ACE3D;
