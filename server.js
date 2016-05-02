// MODULES---------------------------------------
//-----------------------------------------------
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Business  = require('./app/models/bModel.js');
var User  = require('./app/models/uModel.js');

mongoose.connect('mongodb://localhost/Artisanal');

// CONFIG----------------------------------------
//-----------------------------------------------


// PORT------------------------------------------
var port = process.env.PORT || 3030;

// connect to our mongoDB database
// mongoose.connect(db.url);

// parse application/vnd.api+json as json
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb', type: 'application/vnd.api+json' }));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(__dirname + '/public'));
// routes ==================================================
require('./app/routes')(app); // configure our routes
app.use(express.static(__dirname + '/public'));

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Listening in on port ' + port);

// expose app
exports = module.exports = app;
