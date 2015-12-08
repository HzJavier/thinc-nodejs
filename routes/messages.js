var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var firebaseRef = new Firebase("https://thinc-chat.firebaseio.com/messages");
var MSG_LIMIT = 500;
var TIMEOUT_MS = 100;

router.use(bodyParser.json());

router.get('/', function (req, res) {
  var messages = [];
  
  var timeoutId = setTimeout(function () {
    firebaseRef.off('child_added');
    res.send(messages);
  }, TIMEOUT_MS);

  firebaseRef
    .limitToLast(MSG_LIMIT)
    .on('child_added', function (snapshot) {
      messages.push(snapshot.val());

      clearTimeout(timeoutId);

      if (messages.length === MSG_LIMIT) {
        firebaseRef.off('child_added');
        res.send(messages);
      } else {
        timeoutId = setTimeout(function () {
          firebaseRef.off('child_added');
          res.send(messages); 
        }, TIMEOUT_MS);
      }

    });

});

router.post('/', function (req, res) {
  var message = req.body || {};
  message.timestamp = Date.now();

  firebaseRef.push(message);

  res.send('success');
});

module.exports = router;
