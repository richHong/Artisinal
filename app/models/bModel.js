var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var Businesses = new Schema({
    company: {
        type:String,
        required: true,
        unique: true
    },
    address: {
        type:String,
        required: true
    },
    specialty: String,
    phoneNumber: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    description: String,
    picture: String,
    menu: String,
    link: String
});

//business model complete and exported
 var Business =  mongoose.model('Business', Businesses);

 module.exports = Business;
