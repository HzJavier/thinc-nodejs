var messengerApp = angular.module('messengerApp', [
  'ngRoute',
  'userControllers',
  'chatControllers'
]); 

messengerApp.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'app/messages/conversation-window.html',
          controller: 'ChatCtrl'
        }).
        when('/users', {
          templateUrl: 'app/users/list.html',
          controller: 'UsersCtrl'
        }).
        when('/users/:id', {
          templateUrl: 'app/users/profile.html',
          controller: 'UserCtrl'
        })
    }]);

