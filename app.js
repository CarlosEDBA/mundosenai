// Set the require wrapper
global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
}

global.publicDir = __dirname + '/public/';

// Defaults


// Default Modules
var express = require('express');
var app = express();
var router = express.Router();
var io = require('socket.io');
var program = require('commander');

// Root Modules
var http = rootRequire('patchs/http');
var P2C = rootRequire('Print2Console');
var JSON2File = rootRequire('JSON2File');

program
    .version('0.0.1')
    .description('Just a Simple Server\n   Developed by Carlos Eduardo')
    .option('-p, --port [port]', 'port to listen for', 2000)
    .option('-m, --mode [mode]', 'what mode the server should run [prod|dev]', 'dev')
    .parse(process.argv);

if (program.mode === 'dev') {
    P2C.dev();
} else if (program.mode === 'prod') {
    P2C.prod();
}

// Set the port
var PORT = program.port;

/*
//
// HTTP Server
//
*/
app.use(
    express.static(publicDir)
);

// Apply patchs to the middleware
http.badRequest(app);

// Setup the routes
rootRequire('routes/logger')(app);
rootRequire('routes/general')(express, app);

// BootUp the HTTP Server
var server = app.listen(PORT, function () {
    P2C.info('express', 'Server listening on port ' + PORT);
});

/*
//
// Socket.IO Server
//
*/

io = io(server, { log: false });

io.on('connection', function (server) {
    server.on('saveRequest', function (data) {
        JSON2File('rooms', data);
    });
});