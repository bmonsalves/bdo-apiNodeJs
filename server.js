
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
var db = {};

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
	notaNueva.id = Date.now();

	db[notaNueva.id] = notaNueva;

	// prepare response
	res.status(201);

	// send response
	res.send({
	nota: notaNueva
	});
});

//parametro opcional :id? 
server.get('/notas/:id?', function(req,res){
	console.log('GET /notas/%s',req.params.id);

	var id = req.params.id;
	var nota = db[id];

	res.json({
		notas: nota
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



