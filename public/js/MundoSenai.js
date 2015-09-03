var MundoSenai = MundoSenai || function () {
	var SenaiRoom = document.registerElement('senai-room', { prototype: Object.create(HTMLElement.prototype) });
};

MundoSenai.prototype.mouseCoords = function () {
	document.addEventListener('mousemove', function (e) {
		var x = e.pageX;
		var y = e.pageY;
		console.log('Mouse Position: x: ' + x + ' - y: ' + y);
	});
};

MundoSenai.prototype.setupModal = function () {
	var modal = document.querySelector('senai-modal');
	var close = document.querySelector('senai-modal .close');

	close.addEventListener('click', toggleModal);

	function toggleModal(e) {
		modal.setAttribute('room', '');
		modal.setAttribute('state', '');
	}
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
	var wow = document.querySelector('senai-wow');
	var updown = document.querySelector('senai-updown');
	var terreo = document.querySelector('senai-map[name="terreo"]');
	var terreoCanvas = document.querySelector('senai-map[name="terreo"] canvas');
	var andar = document.querySelector('senai-map[name="andar"]');
	var andarCanvas = document.querySelector('senai-map[name="andar"] canvas');
	
	wow.addEventListener('click', function (e) {
		var state = wow.getAttribute('state');
		
		if (state !== 'dev') {
			wow.setAttribute('state', 'dev');
			
			terreo.setAttribute('state', 'hehehe');
			andar.setAttribute('state', 'hihihi');

			terreoCanvas.addEventListener('click', function (e) {
				wow.setAttribute('state', '');
				updown.setAttribute('state', 'up');
				terreo.setAttribute('state', 'open');
				andar.setAttribute('state', 'up');
			});

			andarCanvas.addEventListener('click', function (e) {
				wow.setAttribute('state', '');
				updown.setAttribute('state', 'down');
				terreo.setAttribute('state', 'down');
				andar.setAttribute('state', 'open');
			});
		} else if (state == 'dev') {
			wow.setAttribute('state', '');
			terreo.setAttribute('state', 'open');
			andar.setAttribute('state', 'up');
		}
		
	});
};

module.exports = MundoSenai;
