var http = require('http');

var server = {};
var PORT;

server.config = function (config) {
  PORT = config.port || 8080;
};

server.start = function (port) {
   http.createServer(function (request, response) {
    var data = { 'key_1' : '1', 'key_2': '2', 'key_3': 3};
    var message = JSON.stringify(data);

    response.writeHead(200, {'Content-type': 'application/json'});
    response.write(message);
    response.end();
  }).listen(PORT);

  console.log('Listening on ' + PORT); 
};

module.exports = server;







