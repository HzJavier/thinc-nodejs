var express = require('express');
var app = express();
var PORT = 8080;

// ROUTES
var messages = [
  'Message 0',
  'Message 1',
  'Message 2',
  'Message 3'
];

app.get('/', function (req, res) {
  res.send('Facebook messenger killer');
});


app.route('/messages')
  .get(function (req, res) {
    res.send(messages);
  })
  .post(function (req, res) {
    var newMessage = 'Message ' + messages.length;
    messages.push(newMessage);
    res.send(newMessage);
  });

app.route('/messages/:id')
  .put(function (req, res) {
    var index = req.params.id;
    var newMessage = req.query.message;
    messages[index] = newMessage;
    res.send(messages[index]);
  });

app.listen(PORT);
console.log('Listening on ' + PORT);
