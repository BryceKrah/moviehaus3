/*global require process*/
'use strict';
const express = require('express');
const logger = require('morgan');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

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

// turn me on!
app.listen(port, () => {
  console.log('I m alive!', port);
});
