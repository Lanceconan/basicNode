const express = require('express');
const router = express.Router();

router.get(
    '/',
    (req, res) => {
        // res.send('<h1> Hola mundo desde Express</h1>');
        // res.end();
        res.render('index.ejs');
    }
);

router.get(
    '/login',
    (req, res) => {
        // res.send('<h1>aquí va el login</h1>');
        // res.end();
        res.render('login.ejs');

    }
);



module.exports = router;