var routeHandler = {};

routeHandler['/users'] = function () {
  return "These are users";
};

routeHandler['/messages'] = function () {
  return "These are messages";
};

var router = function (path, callback) {
  if(routeHandler[path]) {
    var message = routeHandler[path]();
    callback(message); 
  } else {
    callback("");
  }
};

module.exports = router;
