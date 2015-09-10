// *************************************************** //
// * New Room **************************************** //
// * Mundo Senai ************************************* //
// *************************************************** //

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
		var image = container.querySelector('.image');
		var description = container.querySelector('.description');
		var data = {
			sala: room.value,
			titulo: title.value,
			imagem: image.value,
			descricao: description.value
		};

		socketsClient.emit('saveRequest', data);
		alert('Dados enviados!');

		room.value = '';
		title.value = '';
		image.value = '';
		description.value = '';
		//console.log(data);
	}

	function boot () {
		setupForm();
	}

	boot();
})();