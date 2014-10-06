
/**
 * Module dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
//var logger = require('./lib/logger');

/**
 * Locals
 */
var server = module.exports = express();


/*
	MIDDLEWARE
*/
server.use(bodyParser.json({ type: 'application/json' }));

/*
	ROUTES
*/
var notas = require('./lib/notas');
server.use(notas);

/*
START SERVER
*/
if (!module.parent) {
	server.listen(3000, function(){
		console.log('corriendo');
	});
}



