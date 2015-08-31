var fs = require('fs');
var file;

function parseData (data) {
	return JSON.parse(data);
}

function updateData (err, origin, data) {
	if (err) console.error(err);
	var json = parseData(origin);
	json.push(this);
	writeData(JSON.stringify(json, null, 4));
}

function writeData (data) {
	fs.writeFile(file, data, function (err) { if (err) console.error(err); });
}

module.exports = function (origin, data) {
	file = publicDir + origin + '.json';
	fs.readFile(file, 'utf8', updateData.bind(data));
};