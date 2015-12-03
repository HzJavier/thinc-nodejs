var messengerApp = angular.module('messengerApp', [
  'ngRoute',
  'userControllers'  
]); 

messengerApp.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/users', {
          templateUrl: 'app/users/list.html',
          controller: 'UsersCtrl'
        })
    }]);

