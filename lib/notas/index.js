var app = require('express')();
var db = {};

/*
	ROUTES
*/
app.post('/notas',function(req, res){

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
app.get('/notas/:id?', function(req,res){
	console.log('GET /notas/%s',req.params.id);

	var id = req.params.id;
	var nota = db[id];

	res.json({
		notas: nota
	});
});

module.exports = app;