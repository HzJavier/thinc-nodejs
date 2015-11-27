var server = require('./server');

var config = {
  port: 5000
};

server.config(config);
server.start();
