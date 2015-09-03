var NewRoom = (function () {
	var url = window.location.origin;
	var socketsClient = io(url);

	function setupForm () {
		var saveButton = document.querySelector('.save');
		saveButton.addEventListener('click', sendSaveRequest);
	}

	function sendSaveRequest (e) {
		var container = e.target.parentNode;
		var room = container.querySelector('.room');
		var title = container.querySelectorAll('input')[1];
		var description = container.querySelector('.description');
		var data = {
			sala: room.value,
			titulo: title.value,
			descricao: description.value
		};

		socketsClient.emit('saveRequest', data);
		alert('Dados enviados!');

		room.value = '';
		title.value = '';
		description.value = '';
		//console.log(data);
	}

	function boot () {
		setupForm();
	}

	boot();
})();