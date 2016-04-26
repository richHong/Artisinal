angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/viewIndex.html',
        controller: 'MainController'
      })
      .when('/register', {
        templateUrl: 'views/',
        controller: 'RegController'
      });
  }
]);
