const express = require('express');
const color = require('colors');
const morgan = require('morgan');

const server = express();

// SETTINGS
server.set('appName', 'Mi primer Server');
server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');

//MIDDLEWARE
server.use(
    morgan('combined')
);

// server.use(
//     function(req, res, next) {
//         console.log('request url: ', req.url);
//         next();
//     }
// );

// server.use(
//     (req, res, next) => {
//         console.log('Ha pasado por esta función');
//         next();
//     }
// );

//RUTAS
const routes = require('./routes.js');
server.use(routes);

const routesApi = require('./routes-api.js');
server.use('/api', routesApi);


server.get(
    '*',
    (req, res) => {
        //res.writeHead(404, { 'content-type': 'text/html' });
        res.send('<h1>Ruta no específicada</h1>');
        res.end();
    }
);

server.listen(
    3000,
    () => {
        console.log('Servidor oyendo en el puerto 3000'.green);
        console.log('El nombre de la APP: ', server.get('appName'));
    }
);