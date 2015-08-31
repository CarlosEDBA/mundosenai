var jsonfile = require('jsonfile');

module.exports = function (file, data) {
	jsonfile.writeFile(publicDir + file, JSON.stringify(data), function (err) {
		console.error(err);
	});
};