 /*global require process*/
require('dotenv').config();
'use strict';
const express = require('express');
const logger = require('morgan');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');;
//const dotenv = require('dot-env');
var db = require('./db/pg.js');

const app = express();
const port = process.env.port || 3000;

// var pgp = require('pg-promise')({
//     // Initialization Options
// });
// var cn = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS
// };

const theaterRoutes = require( path.join(__dirname, '/routes/theaterRoutes'));
const movieRoutes = require( path.join(__dirname, '/routes/movies'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// serve static files
app.use(express.static(path.join(__dirname,'public')));

// set up some logging
app.use(logger('dev'));

app.get('/', (req,res) => {
    res.render('pages/index');

});

app.use('/theaters', theaterRoutes);
app.use('/theaters/:theaterID/movies', movieRoutes);


// turn me on!
app.listen(port, () => {
  console.log('I m alive!', port);
});
