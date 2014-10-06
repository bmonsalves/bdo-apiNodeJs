var request = require('supertest');
var api = require('../server.js');
//corre las pruebas con diferentes hosts
var host = process.env.API_TEST_HOST || api;

//inicia la libreria con nuestro servidor
request = request(host);

describe('recurso /notas', function(){
	//describe el contexto de la prueba inicial
	describe('POST',function(){
		it('deberia crear una nota nueva',function(done){
			//crear solicitud http
			//application/json
			var data = {
					    "nota": {
					      "title": "nota 1",
					      "description": "prueba de nota 1",
					      "type": "js",
					      "body": "cuerpo json nota"
					    }
					  };
			request
			    .post('/notas')
			    .set('Accept', 'application/json')
			    .send(data)
			    .expect(201)
			    .expect('Content-Type', /application\/json/)
	        	.end(function(err, res) { //ejecuta de manera asincrona
					var nota;

					var body = res.body;
					console.log('body', body);

					// Nota existe
					expect(body).to.have.property('nota');
					nota = body.nota;

					// Propiedades
					expect(nota).to.have.property('title', 'nota 1');
					expect(nota).to.have.property('description', 'prueba de nota 1');
					expect(nota).to.have.property('type', 'js');
					expect(nota).to.have.property('body', 'cuerpo json nota');
					expect(nota).to.have.property('id');

					done();
			});
		});
	});

	describe('GET',function(){
		it('deberia obtener una nota existente',function(done){
			//enviar nota
			var data = {
					    "nota": {
					      "title": "nota 1",
					      "description": "prueba de nota 1",
					      "type": "js",
					      "body": "cuerpo json nota"
					    }
					  };
			request
			    .post('/notas')
			    .set('Accept', 'application/json')
			    .send(data)
			    .expect(201)
			    .expect('Content-Type', /application\/json/)
			    .end(function(err,res){
			    	var id = res.body.nota.id;
			    	
			    	request
			    		.get('/notas/'+id)
			    		.expect(200)
			    		.expect('Content-Type', /application\/json/)
			    		.end(function(err, res){
			    			var nota = res.body.notas;

			    			expect(nota).to.have.property('title', 'nota 1');
							expect(nota).to.have.property('description', 'prueba de nota 1');
							expect(nota).to.have.property('type', 'js');
							expect(nota).to.have.property('body', 'cuerpo json nota');
							expect(nota).to.have.property('id',id);
							done();
			    		});
			    });
		});
	});
});