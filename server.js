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

    router(pathname, function (message) {
      if (message === "") {
        response.writeHead(404, {'Content-type': 'application/json'});
        response.end()
      } else {
        response.writeHead(200, {'Content-type': 'application/json'});
        response.write(message);
        response.end();
      }
    });
  }).listen(PORT);

  console.log('Listening on ' + PORT); 
};

module.exports = server;







