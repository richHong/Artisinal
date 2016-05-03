var Business  = require('./models/bModel.js');
var User  = require('./models/uModel.js');

module.exports = function(app) {

  app.post('/api/files', function(req, res, next){
    console.log('and the call has been successful');
    var busboy = new Busboy({
      headers: req.headers
    });

    busboy.on('error', function(err){
      console.log(err);
    });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype){
      db.uploadFile(req.files.file.name);
    });
    busboy.on('finish', function(){
      console.log('finish');
    })
  })

  //get for business model  to retrieve information within Business database
  app.get('/api/business', function(req, res) {
    Business.find({}, function(err, business) {
    if(err){
      res.send(err);
    }
    res.json(business);
    });
  });

  app.post('/api/business', function(req, res) {
    //create new instance of the business model and add properties to new instance
    var newBusiness = new Business();
    newBusiness.company = req.body.company,
    newBusiness.address = req.body.address,
    newBusiness.specialty = req.body.specialty,
    newBusiness.phoneNumber = req.body.phoneNumber,
    newBusiness.email = req.body.email,
    newBusiness.description = req.body.description,
    newBusiness.picture = req.body.picture,
    newBusiness.menu = req.body.menu,
    newBusiness.link = req.body.link

    //save the newly created model into the database
    newBusiness.save(function(err, newBusiness) {
      if (err) {
        //log error if one exists
        console.log(err);
        res.send({errorMessage: err});
      } else {
        console.log('what is in req.body?', req.body);
        res.json(req.body);
      }
    });
  });

  app.get('/api/users', function(req, res) {
    User.find({}, function(err, users){
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  });

  app.post('/api/users', function(req, res) {
    //create new instance of the User model and add properties to new instance
    var newUser = new User();
    newUser.name = req.body.name,
    newUser.username = req.body.username,
    newUser.password = req.body.password,
    newUser.address = req.body.address,
    newUser.phoneNumber =  req.body.phoneNumber,
    newUser.email = req.body.email,
    newUser.picture =  req.body.picture,

    //save the newly created model into the database
    newUser.save(function(err, newUser) {
      if (err) {
        //log error if one exists
        console.log(err);
        res.send({errorMessage: err});
       } else {
        res.json(req.body);
       }
    })
  });
};
