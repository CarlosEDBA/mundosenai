module.exports = function (renderer) {
	/*function webglAvailable() {
	    try {
	        var canvas = document.createElement('canvas');
	        return !!( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
	    } catch (e) {
	        return false;
	    }
	}

	if (webglAvailable()) {
    	this.renderer = new THREE.WebGLRenderer({ antialias: true });
	} else {
    	this.renderer = new THREE.CanvasRenderer();
	}*/

	var canvas = document.createElement('canvas');

	renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
};
