// *************************************************** //
// * Bootstrap - Mundo Senai ************************* //
// * Ace Graphics ************************************ //
// *************************************************** //

var normalize = require('normalize-css');
var Ace = require('./Ace');
var MundoSenai = require('./MundoSenai');

// Inicia as cosias básicas :P
var MS = new MundoSenai();
MS.changeMap();
MS.viewModes();
//MS.mouseCoords();

// Canvas
var terreo = document.querySelector('senai-map[name="terreo"] canvas');
var andar = document.querySelector('senai-map[name="andar"] canvas');

// Carrega os mapas nos canvas
require('../maps/MSTerreo')(Ace, terreo);
require('../maps/MSAndar')(Ace, andar);
