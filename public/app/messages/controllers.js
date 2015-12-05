var chatControllers = angular.module('chatControllers', []);
var socket = io();

chatControllers.controller('ChatCtrl', ['$scope',
  function ($scope) {
    var max = 101;
    var min = 1;
    $scope.username = 'user_' + (Math.floor(Math.random() * (max - min)) + 1);
    $scope.messages = [];

    socket.on('newMessage', function (msg) {
      $scope.messages.push(msg);
      $scope.$apply();
    });

      $scope.sendMessage = function (msg) {
        socket.emit('newMessage', {
          user: $scope.username,
          text: msg 
        }); 
      };
  }]);
