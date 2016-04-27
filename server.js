// MODULES---------------------------------------
//-----------------------------------------------
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Business  = require('./app/models/bModel.js');

mongoose.connect('mongodb://localhost/Artisanal');

// CONFIG----------------------------------------
//-----------------------------------------------
// var db = require('./config/db');

// PORT------------------------------------------
var port = process.env.PORT || 3030;

// connect to our mongoDB database
// mongoose.connect(db.url);

app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// routes ==================================================
// require('./app/routes')(app); // configure our routes
app.use(express.static(__dirname + '/public'));

//========================================================= TESTING
app.post('/api/business', function(req, res){
  //create new instance of the business model and add properties to new instance
  console.log('*********************** post being called in routs.js file -- SERVER SIDE POWER###');
  var newBusiness = new Business();
  newBusiness.name = req.body.name,
  newBusiness.address = req.body.address,
  newBusiness.phoneNumber = req.body.phoneNumber,
  newBusiness.email = req.body.email,
  newBusiness.description =  req.body.description,
  newBusiness.picture = req.body.picture,
  newBusiness.menu =  req.body.menu,
  newBusiness.link = req.body.link

  //save the newly created model into the database
  newBusiness.save(function(err, newBusiness){
    if (err) {
      //log error if one exists 
      console.log(err)
      res.send({errorMessage: err});
     }else{
      res.json(req.body);
     }
  })

  // res.send('ok it was sent!!!!');
});
//=========================================================

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Listening in on port ' + port);

// expose app
exports = module.exports = app;
