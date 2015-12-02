var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

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
  User.find(function (err, data) {
    if (err) {
      throw err;
    }

    res.send(data);
  });
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  User.findOne({id: id}, function (err, data) {
    res.send(data);
  });
});

router.post('/', function (req, res) {
  var bodyData = req.body;
  
  if(!bodyData.name || !bodyData.password) {
    res.send('Failure');
  } else {
    User.find(function (err, data) {
      var nextId = data.length;
      var newUser = new User({id: nextId, name: bodyData.name, password: bodyData.password});
      newUser.save(function (err) {
        res.send(newUser); 
      });
    });
  }
});


router.put('/:id', function (req, res) {
  var id = req.params.id;
  var bodyData = req.body || {};

  if (!bodyData.name || !bodyData.password) {
    res.send('Failure');
  } else {
    User.findOne({id: id}, function (err, user) {
      if (err) {
        throw err;
      }

      user.name = bodyData.name;
      user.password = bodyData.password;
      user.save(function (err) {
        res.send(user);
      });
    });
  }
});

module.exports = router;
