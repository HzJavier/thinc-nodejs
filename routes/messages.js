var express = require('express');
var router = express.Router();

// ROUTES
var messages = [
  'Message 0',
  'Message 1',
  'Message 2',
  'Message 3'
];

router.get('/', function (req, res) {
  res.send(messages);
});

router.post('/', function (req, res) {
  var newMessage = 'Message ' + messages.length;
  messages.push(newMessage);
  res.send(newMessage);
});

router.put('/:id', function (req, res) {
  var index = req.params.id;
  var newMessage = req.query.message;
  messages[index] = newMessage;
  res.send(messages[index]);
});

module.exports = router;
