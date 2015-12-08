var chatControllers = angular.module('chatControllers', []);
var socket = io();

chatControllers.controller('ChatCtrl', ['$scope', '$http',
  function ($scope, $http) {
    var max = 101;
    var min = 1;
    $scope.username = 'user_' + (Math.floor(Math.random() * (max - min)) + 1);
    $scope.messages = [];

    $http.get('/api/messages').success(function (data) {
      $scope.messages = data;
    });

    socket.on('newMessage', function (msg) {
      $scope.messages.push(msg);
      $scope.$apply();
    });

      $scope.sendMessage = function (msg) {
        var message = {
          user: $scope.username,
          text: msg 
        };

        $http.post('/api/messages', message);

        socket.emit('newMessage', message); 
      };
  }]);
