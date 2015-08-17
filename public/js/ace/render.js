module.exports = function () {
	function webglAvailable() {
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
	}
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);
};
