var userControllers = angular.module('userControllers', []);

userControllers.controller('UsersCtrl', ['$scope', '$http', 
  function ($scope, $http) {

    $http.get('/api/users').success(function (data) {
      $scope.users = data;
    });
  }]);

userControllers.controller('UserCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
    var userId = $routeParams.id;

    $http.get('/api/users/' + userId).success(function (data) {
      $scope.user = data;
    });

    var currentColorIndex = 0;
    var colors = [
      "#000",
      "#F00",
      "#0F0",
      "#00F",
      "#AAA",
      "#F0986E"
    ];

    $scope.currentColor = colors[currentColorIndex];

    $scope.changeColor = function () {
      currentColorIndex++;
      currentColorIndex %= 6;
      $scope.currentColor = colors[currentColorIndex];
    };
  }]);
