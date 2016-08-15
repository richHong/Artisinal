var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

//basic schema for Businesses entering information from from
var Users = new Schema({
    username: String,
    password: String,
    name: String,
    address: String,
    phoneNumber: Number,
    email: {
      type:String,
      unique: true
    },
    picture: String,
});

//business model complete and exported
 var User =  mongoose.model('User', Users);

 module.exports = User;
