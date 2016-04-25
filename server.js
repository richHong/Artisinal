// MODULES---------------------------------------
//-----------------------------------------------
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var db = require('./config/db.js');

mongoose.connect('mongodb://localhost/dbName');

// CONFIG----------------------------------------
//-----------------------------------------------
var db = require('./config/db');

// PORT------------------------------------------
var port = process.env.PORT || 8080;

// connect to our mongoDB database
mongoose.connect(db.url);

app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Listening in on port ' + port);

// expose app
exports = module.exports = app;
