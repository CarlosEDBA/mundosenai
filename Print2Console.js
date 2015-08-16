var chalk = require('chalk');

var info = chalk.bold.white;
var warn = chalk.bold.yellow;
var error = chalk.bold.red;

var express = chalk.bold.cyan;
var mongodb = chalk.bold.green;
var text = chalk.bold.white;

var Print2Console = {
    
    dev: function () {
        console.info('\n' + text('   Server running in Development Mode'));
    },
                     
    prod: function () {
        console.info('\n' + text('   Server running in Production Mode'));
    },
    
    info: function (mod, message) {
        if (mod == 'express') {
            console.info('\n' + info('   info') + ' - ' + express(mod) + ' -> ' + text(message));
        }
        else if (mod == 'mongodb') {
            console.info('\n' + info('   info') + ' - ' + mongodb(mod) + ' -> ' + text(message));
        }
    },
    
    warn: function (mod, message) {
        if (mod == 'express') {
            console.info('\n' + warn('   warn') + ' - ' + express(mod) + ' -> ' + text(message));
        }
        else if (mod == 'mongodb') {
            console.info('\n' + warn('   warn') + ' - ' + mongodb(mod) + ' -> ' + text(message));
        }
    },
    
    error: function (mod, message) {
        if (mod == 'express') {
            console.info('\n' + error('   error') + ' - ' + express(mod) + ' -> ' + text(message));
        }
        else if (mod == 'mongodb') {
            console.info('\n' + error('   error') + ' - ' + mongodb(mod) + ' -> ' + text(message));
        }
    }
}

module.exports = Print2Console;