var NewRoom = (function () {
	var url = window.location.origin;
	var socketsClient = io(url);

	function setupForm () {
		var saveButton = document.querySelector('.save');
		saveButton.addEventListener('click', sendSaveRequest);
	}

	function sendSaveRequest (e) {
		var container = e.target.parentNode;
		var room = container.querySelector('.room').value;
		var title = container.querySelectorAll('input')[1].value;
		var description = container.querySelector('.description').value;
		var data = {
			room: room,
			title: title,
			description: description
		};

		socketsClient.emit('saveRequest', data);
		console.log(data);
	}

	function boot () {
		setupForm();
	}

	boot();
})();