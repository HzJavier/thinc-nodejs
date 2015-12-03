var userControllers = angular.module('userControllers', []);

userControllers.controller('UsersCtrl', ['$scope', '$http', 
  function ($scope, $http) {

    $http.get('/api/users').success(function (data) {
      $scope.users = data;
    });
  }]);
