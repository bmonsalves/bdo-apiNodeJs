
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
server.post('/notas',function(req, res){

	//obtiene el json
	console.log("POST", req.body);
	//console.log(req.is('json'));

	// manipulate request
	var notaNueva = req.body.nota;
	notaNueva.id = '123';

	// prepare response
	res.status(201);

	// send response
	res.send({
	nota: notaNueva
	});
});


/*
START SERVER
*/
if (!module.parent) {
	server.listen(3000, function(){
		console.log('corriendo');
	});
}



