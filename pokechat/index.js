/*
 * Module Dependencies
 */

import express from 'express';
import http from 'http';
import engine from 'socket.io';

const port = 3004;
const app = express();

//configurar la ruta de archivos estaticos
app.use('/', express.static(__dirname + '/public'));

//condigurar ruta para index
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

let server = http.createServer(app).listen(port, () => {
	console.log(`El servidor esta escuchado en el puerto ${port}`);
});