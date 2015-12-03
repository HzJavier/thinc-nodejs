var express = require('express');
var app = express();
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

app.listen(PORT);
console.log('Listening on ' + PORT);
