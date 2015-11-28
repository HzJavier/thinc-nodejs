var http = require('http');
var url = require('url');
var router = require('./router');

var server = {};
var PORT;

server.config = function (config) {
  PORT = config.port || 8080;
};

server.start = function (port) {
   http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    router(pathname, response);
  }).listen(PORT);

  console.log('Listening on ' + PORT); 
};

module.exports = server;







