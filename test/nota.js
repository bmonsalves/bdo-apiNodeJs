var request = require('supertest');
var api = require('../server.js');
//corre las pruebas con diferentes hosts
var host = process.env.API_TEST_HOST || api;

//inicia la libreria con nuestro servidor
request = request(host);

describe('recurso /notas', function(){
	//describe el contexto de la prueba inicial

});