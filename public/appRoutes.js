angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {

    // These
    $routeProvider
      .when('/', {
        templateUrl: 'views/viewIndex.html',
        controller: 'MainController'
      })
      .when('/register', {
        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      .when('/profile', {
        templateUrl: 'views/'
      });
  }
]);
