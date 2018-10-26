const express = require('express');
const color = require('colors');

const server = express();

server.get(
    '/',
    (req, res) => {
        res.send('<h1> Hola mundo desde Express</h1>');
        res.end();
    }
);

server.get(
    '/login',
    (req, res) => {
        res.send('<h1>aquí va el login</h1>');
        res.end();
    }
);

server.get(
    '*',
    (req, res) => {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.send('<h1>Ruta no específicada</h1>');
        res.end();
    }
);

server.listen(
    3000,
    () => {
        console.log('Servidor oyendo en el puerto 3000'.green);
    }
);