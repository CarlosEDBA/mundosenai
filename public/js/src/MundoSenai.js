// *************************************************** //
// *************************************************** //
// * Mundo Senai ************************************* //
// *************************************************** //

var MundoSenai = MundoSenai || function () {
	var SenaiMaps = document.registerElement('senai-maps', { prototype: Object.create(HTMLElement.prototype) });
	var SenaiRoom = document.registerElement('senai-room', { prototype: Object.create(HTMLElement.prototype) });
};

MundoSenai.prototype.mouseCoords = function () {
	document.addEventListener('mousemove', function (e) {
		var x = e.pageX;
		var y = e.pageY;
		console.log('Mouse Position: x: ' + x + ' - y: ' + y);
	});
};

MundoSenai.prototype.changeMap = function () {
	var terreo = document.querySelector('senai-map[name="terreo"]');
	var andar = document.querySelector('senai-map[name="andar"]');
	var updown = document.querySelector('senai-updown');
	var button = document.querySelector('senai-updown .updown');

	button.addEventListener('click', toggleMap);

	function toggleMap (e) {
		var state = updown.getAttribute('state');
		if (state == 'up') {
			terreo.setAttribute('state', 'down');
			andar.setAttribute('state', 'open');
			updown.setAttribute('state', 'down');
		} else if (state == 'down') {
			terreo.setAttribute('state', 'open');
			andar.setAttribute('state', 'up');
			updown.setAttribute('state', 'up');
		}
	}
};

MundoSenai.prototype.viewModes = function () {
	var lalala = document.querySelector('senai-lalala');
	var updown = document.querySelector('senai-updown');
	var terreo = document.querySelector('senai-map[name="terreo"]');
	var terreoCanvas = document.querySelector('senai-map[name="terreo"] canvas');
	var andar = document.querySelector('senai-map[name="andar"]');
	var andarCanvas = document.querySelector('senai-map[name="andar"] canvas');
	
	lalala.addEventListener('click', function (e) {
		var state = lalala.getAttribute('state');
		
		if (state !== 'dev') {
			lalala.setAttribute('state', 'dev');
			
			terreo.setAttribute('state', 'lalala');
			andar.setAttribute('state', 'asdas');

			terreoCanvas.addEventListener('click', function (e) {
				lalala.setAttribute('state', '');
				updown.setAttribute('state', 'up');
				terreo.setAttribute('state', 'open');
				andar.setAttribute('state', 'up');
			});

			andarCanvas.addEventListener('click', function (e) {
				lalala.setAttribute('state', '');
				updown.setAttribute('state', 'down');
				terreo.setAttribute('state', 'down');
				andar.setAttribute('state', 'open');
			});
		} else if (state == 'dev') {
			lalala.setAttribute('state', '');
			terreo.setAttribute('state', 'open');
			andar.setAttribute('state', 'up');
		}
		
	});
};

module.exports = MundoSenai;
