var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var dataLayer = require('../data-layer');
var Firebase = require('firebase');
var firebaseRef = new Firebase("https://thinc-chat.firebaseio.com/messages");

router.use(bodyParser.json());

router.get('/', function (req, res) {
  dataLayer.getMessages(function (data) {
    res.send(data);
  });
});

router.post('/', function (req, res) {
  var message = req.body || {};
  message.timestamp = Date.now();

  firebaseRef.push(message);

  res.send('success');
});

module.exports = router;
