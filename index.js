var server = require('./server');

var config = {
  port: 8080
};

server.config(config);
server.start();
