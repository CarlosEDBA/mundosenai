// *************************************************** //
// *************************************************** //
// * Mundo Senai ************************************* //
// *************************************************** //

var MundoSenai = MundoSenai || function () {
	this.localhost = window.location.origin;

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

MundoSenai.prototype.loadJSON = function (path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                	success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
};

MundoSenai.prototype.loadData = function () {
	var data = this.loadJSON(this.localhost + '/rooms.json', function (data) {
		localStorage.setItem('rooms', JSON.stringify(data));
	});
};

MundoSenai.prototype.setUpdown = function () {
	var terreo = document.querySelector('senai-map[name="terreo"]');
	var andar = document.querySelector('senai-map[name="andar"]');
	var updown = document.querySelector('senai-updown');
	var button = document.querySelector('senai-updown .updown');

	button.addEventListener('click', function (e) {
		var state = updown.getAttribute('state');
		if (state == 'up') {
			terreo.setAttribute('state', 'down');
			andar.setAttribute('state', 'visible');
			updown.setAttribute('state', 'down');
		} else if (state == 'down') {
			terreo.setAttribute('state', 'visible');
			andar.setAttribute('state', 'up');
			updown.setAttribute('state', 'up');
		}
	});
};

MundoSenai.prototype.setOverview = function () {
	var senaiMaps = document.querySelector('senai-maps');
	var toggleButton = document.querySelector('senai-overview');

	toggleButton.addEventListener('click', function (e) {
		var mapsState = senaiMaps.getAttribute('state');
		var toggleState = toggleButton.getAttribute('state');
		var toggleMap = toggleButton.getAttribute('map');

		if (mapsState !== 'overview') {
			toggleButton.setAttribute('state', 'active');
			toggleButton.setAttribute('map', mapsState);
			senaiMaps.setAttribute('state', 'overview');
		} else {
			toggleButton.setAttribute('state', 'inactive');
			toggleButton.setAttribute('map', '');
			senaiMaps.setAttribute('state', toggleMap);
		}
	});
};

MundoSenai.prototype.changeMapsState = function (maps, state) {
	var updown = document.querySelector('senai-updown');

	if (state == 'overview') {
		updown.setAttribute('state', 'inactive');
		[].forEach.call(maps, function (el, ind, arr) {
			el.setAttribute('state', 'overview');
		}, this);
	} else {
		var map = document.querySelector('senai-map[name="' + state + '"]');
		var notTheMap = document.querySelectorAll('senai-map:not([name="' + state + '"])');
		map.setAttribute('state', 'visible');
		[].forEach.call(notTheMap, function (el, ind, arr) {
			el.setAttribute('state', 'hided');
		}, this);

		if (state === 'terreo') {
			updown.setAttribute('state', 'up');
		} else if (state === 'andar') {
			updown.setAttribute('state', 'down');
		} else {
			updown.setAttribute('state', 'inactive');
		}
	}
};

MundoSenai.prototype.changeMapState = function (e) {
	var map = e.target.parentNode;
	var mapName = map.getAttribute('name');
	this.setAttribute('state', mapName);
	map.setAttribute('state', 'visible');
};

MundoSenai.prototype.mapState = function () {
	var senaiMaps = document.querySelector('senai-maps');
	var maps = document.querySelectorAll('senai-map');
	var changeMapsState = this.changeMapsState;

	var config = {
		attributes: true,
		childList: false,
		characterData: false
	};

	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			var state = mutation.target.getAttribute('state');
			var maps = mutation.target.children;
			changeMapsState(maps, state);
		});
	});

	[].forEach.call(maps, function (el, ind, arr) {
		el.addEventListener('click', this.changeMapState.bind(senaiMaps));
	}, this);

	observer.observe(senaiMaps, config);
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
				terreo.setAttribute('state', 'visible');
				andar.setAttribute('state', 'up');
			});

			andarCanvas.addEventListener('click', function (e) {
				lalala.setAttribute('state', '');
				updown.setAttribute('state', 'down');
				terreo.setAttribute('state', 'down');
				andar.setAttribute('state', 'visible');
			});
		} else if (state == 'dev') {
			lalala.setAttribute('state', '');
			terreo.setAttribute('state', 'visible');
			andar.setAttribute('state', 'up');
		}
		
	});
};

module.exports = MundoSenai;
