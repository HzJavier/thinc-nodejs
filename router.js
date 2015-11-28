var routeHandler = {};

routeHandler['/users'] = function (response) {
  response.writeHead(200, {'Content-type': 'application/json'});
  response.write("These are users");
  response.end();
};

routeHandler['/messages'] = function (response) {
  response.writeHead(200, {'Content-type': 'application/json'});
  response.write("These are messages");
  response.end();
};

var router = function (path, response) {
  if(routeHandler[path]) {
    routeHandler[path](response);
  } else {
    response.writeHead(404, {'Content-type': 'application/json'});
    response.end();
  }
};

module.exports = router;
