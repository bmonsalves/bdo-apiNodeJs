var app = require('express')();
var db = {};

/*
	ROUTES
*/

app.route('/notas/:id?')
	//logging
	.all(function(req,res,next){
		console.log(req.method, req.path, req.body)
		res.set('Content-Type', 'application/json')
		next();
	})
	//POST
	.post(function(req, res){
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
	})
	//GET
	.get(function(req,res){
		console.log('GET /notas/%s',req.params.id);

		var id = req.params.id;
		var nota = db[id];

		res.json({
			notas: nota
		});
	});

module.exports = app;