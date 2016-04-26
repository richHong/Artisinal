var mongoose = require('mongoose');
//crate and s3 may be necessary so they are required into the file.
var crate = require('mongoose-crate');
var s3 = require('mongoose-crate-s3');
var Schema  = mongoose.Schema;

//basic schema for Businesses entering information from from
var Businesses = new Schema({
    name: String,
    address: String,
    phoneNumber: Number,
    email: String,
    description: String,
    picture: String,
    menu: String,
    link: String
})

//business model complete and exported
 var Business =  mongoose.model('Business', Businesses);

 module.exports = Business;