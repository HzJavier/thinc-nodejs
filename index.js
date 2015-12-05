var express = require('express');
var app = express();
/**
 * var httpLibrary = require('http');
 * var http = httpLibrary.Server(app);
 */
var http = require('http').Server(app);
/**
 * var socketLibrary = require('socket.io');
 * var socket = socketLibrary(http);
 */
var socketIo = require('socket.io')(http);
var messagesRoutes = require('./routes/messages');
var usersRoutes = require('./routes/users');
var PORT = 8080;

/**
 * This is the middleware
 */
var userCount = 0;

function userCounter(req, res, next) {
  userCount ++;
  console.log('Visitors: ' + userCount);
  next();
}

app.use(userCounter);

/**
 * Middleware to serve static files
 */
app.use(express.static(__dirname + '/public'));

/**
 * These are the routes
 */
app.get('/', function (req, res) {
  res.send('Facebook messenger killer');
});

app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);

socketIo.on('connection', function (socket) {
  console.log('Hey, somebody connnected to your chat');

  socket.on('newMessage', function (msg) {
    console.log('New message: ' + msg);
    socketIo.emit('newMessage', msg);
  });

  socket.on('disconnect', function () {
    console.log('Somebody left the chat :(');
  });
});

http.listen(PORT);
console.log('Listening on ' + PORT);
