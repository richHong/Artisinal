var mongoose = require('mongoose');
//crate and s3 may be necessary so they are required into the file.
var crate = require('mongoose-crate');
var s3 = require('mongoose-crate-s3');
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
    //picture will be uploaded to s3 (aws) and returned as link to be stored in db
    picture: String,
})

//business model complete and exported
 var User =  mongoose.model('User', Users);

 module.exports = User;