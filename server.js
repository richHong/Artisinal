// MODULES---------------------------------------
//-----------------------------------------------
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var AWS = require ('aws-sdk');
var keys = require('./config/keys.js');
var Business  = require('./app/models/bModel.js');
var User  = require('./app/models/uModel.js');

mongoose.connect('mongodb://localhost/Artisanal');

// CONFIG----------------------------------------
//-----------------------------------------------
// var db = require('./config/db');

// AWS.config.update({
//   accessKeyId: Tokens.amazonAccess,
//   secretAccessKey: Tokens.amazonSecret,
//   region: Tokens.amazonRegion
// })

// PORT------------------------------------------
var port = process.env.PORT || 3030;

// connect to our mongoDB database		
// mongoose.connect(db.url);

// parse application/vnd.api+json as json
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
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
