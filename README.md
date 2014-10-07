#instalar modulos
npm install

#EJECUTAR

##test
make test

##ejecucion
node server

##para no reiniciar el server al hacer cambios
npm install -g nodemon
nodemon server

##puerto
3000
--------------------------

#POSTMAN

##POST nota de prueba
http://localhost:3000/notas
{
	"nota": {
	  "title": "nota 1",
	  "description": "prueba de nota 1",
	  "type": "js",
	  "body": "cuerpo json nota"
	}
}

##GET 
http://localhost:3000/notas/<id_nota>