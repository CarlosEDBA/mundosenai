// *************************************************** //
// * Bootstrap - Mundo Senai ************************* //
// * Ace Graphics ************************************ //
// *************************************************** //

var normalize = require('normalize-css');
var Ace = require('./Ace');
var MundoSenai = require('./MundoSenai');

// Inicia as cosias básicas :P
var MS = new MundoSenai();
MS.setOverview();
MS.setUpdown();
MS.mapState();
MS.loadData();
//MS.mouseCoords();

// Canvas
var entrada = document.querySelector('senai-map[name="entrada"] canvas');
var tower = document.querySelector('senai-map[name="tower"] canvas');
var terreo = document.querySelector('senai-map[name="terreo"] canvas');
var andar = document.querySelector('senai-map[name="andar"] canvas');

// Carrega os mapas nos canvas
require('../maps/MSEntrada')(Ace, entrada);
require('../maps/MSTower')(Ace, tower);
require('../maps/MSTerreo')(Ace, terreo);
require('../maps/MSAndar')(Ace, andar);
