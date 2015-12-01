var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/*
 * Database Connection
 */
mongoose.connect('mongodb://localhost:27017/thinc');

var db = mongoose.connection;

db.on('error', function (err) { throw err });
db.once('open', function () {
  console.log('Connected to MongoDB, yei!');
});


/**
 * Schema
 *
 * Supported types:
 *  - String
 *  - Number
 *  - Date
 *  - Buffer
 *  - Boolean
 *  - ObjectId
 *  - Array
 */
var userSchema = new mongoose.Schema({
  id: 'Number',
  name: 'String',
  password: 'String'
});

userSchema.methods.sayYourName = function () {
  var message = 'I am ' + this.name;
  console.log(message);
};


/** Mongoose model */
var User = mongoose.model('users', userSchema);

router.get('/', function (req, res) {
  res.send('ok');
});

router.get('/:id', function (req, res) {

});

router.post('/', function (req, res) {

});


router.put('/:id', function (req, res) {

});

module.exports = router;
