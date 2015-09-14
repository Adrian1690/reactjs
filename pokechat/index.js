/*
 * Module Dependencies
 */

import express from 'express';
import http from 'http';
import engine from 'socket.io';

//conexion con nuestra capa de datos
import dbapi from './db-api';

const port = 3000;
const app = express();

//configurar la ruta de archivos estaticos
app.use('/', express.static(__dirname + '/public'));

app.get('/pokemons', (req, res)=> {
	dbapi.pokemons.find( (pokemons) => {//callback es una function que se ejecuta luego de hacer el find
		res.json(pokemons);// mandamos los pokemons al cliente como un request de tipo json
	}); 
})

//condigurar ruta para index
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

let server = http.createServer(app).listen(port, () => {
	console.log(`El servidor esta escuchado en el puerto ${port}`);
});

/* Motor Socket.io del lado del server*/

const io = engine.listen(server);

/* escuchar nuevas connexiones*/
io.on('connection', (socket) => { // cuando un cliente emita al servidor un message nuevo
	socket.on('message', (msg) => { // el message será escuchado por el servidor y
		io.emit('message', msg); // emitido a todos los demas clientes suscritos a message
	})
})