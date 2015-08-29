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

MundoSenai.prototype.changeMap = function () {
	var terreo = document.querySelector('senai-map[name="terreo"]');
	var andar = document.querySelector('senai-map[name="andar"]');
	var updown = document.querySelector('senai-updown');
	var button = document.querySelector('senai-updown .updown');

	button.addEventListener('click', toggleMap);

	function toggleMap (e) {
		var state = updown.getAttribute('state');
		if (state == 'up') {
			terreo.setAttribute('state', '');
			andar.setAttribute('state', 'open');
			updown.setAttribute('state', 'down');
		} else if (state == 'down') {
			terreo.setAttribute('state', 'open');
			andar.setAttribute('state', '');
			updown.setAttribute('state', 'up');
		}
	}
};

module.exports = MundoSenai;
