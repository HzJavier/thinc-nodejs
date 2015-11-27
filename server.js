var http = require('http');


// http.createServer(methodThatDoesSomething);

http.createServer(function (request, response) {
  var data = { 'key_1' : '1', 'key_2': '2'};
  var message = JSON.stringify(data);

  response.writeHead(200, {'Content-type': 'application/json'});
  response.write(message);
  response.end();
}).listen(8080);

console.log('Server is running');
