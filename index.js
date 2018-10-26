// const os = require('os');

// console.log(os.platform());
// console.log(os.release());
// console.log(os.hostname());
// console.log('free memory', os.freemem(), 'byte');
// console.log('total memory', os.totalmem(), 'byte');

// const fs = require('fs');

// fs.writeFile(
//     './hola.txt',
//     'linea uno de prueba de texto',
//     function(err) {
//         if (err) {
//             console.log('Hubo un error: ', err);
//         }
//         console.log('Archivo creado');
//     }
// );

// console.log('otra tarea que se ejecuta mientras estoy terminando de escribir un archivo de manera asincrona');

// fs.readFile(
//     './hola.txt',
//     function(err, data) {
//         if (err) {
//             console.log(err);
//         }

//         console.log(data.toString());
//     }
// );

const http = require('http');
const color = require('colors');

const handleServer = function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Hola mundo desde node.js</h1>');
    res.end();
}


const server = http.createServer(handleServer);

server.listen(
    3000,
    function() {
        console.log('Servidor en el puerto 3000'.gray);
    }
);