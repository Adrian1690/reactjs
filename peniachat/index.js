/*
 * Module dependencies
 */

import express from 'express';
import http from 'http';
import engine from 'socket.io';

//conexión capa de datos
import dbapi from './db-api';

const port = 3001;
const app = express();

app.use('/', express.static(__dirname + '/public'));

//definir /penias para las llamadas ajax
app.get('/penias', (req, res) => {
	dbapi.penias.find( (penias) => {
		res.json(penias); //devolvemos un json con todods los penias
	});
})

//definimos la ruta para el index
app.get('/', (req, res)=> {
	res.sendFile(__dirname + '/index.html');
})

// creamos el server
let server = http.createServer(app).listen(port, () =>{
	console.log(`El servidor esta corriendo en el puerto ${port}`);
})

/*socket io del lado del servidor */

const io = engine.listen(server);

io.on('connection', (socket) => {
	socket.on('message', (msg) => {
		//console.log('emitiendo');
		io.emit('message', msg);
	})
})

