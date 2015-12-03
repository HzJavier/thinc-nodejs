var messengerApp = angular.module('messengerApp', []); 

messengerApp.controller('messengerCtrl', ['$scope', '$http', 
  function ($scope, $http) {

    $http.get('/users').success(function (data) {
      $scope.users = data;
    });

    $scope.orderProperty = "name";
  }]);
