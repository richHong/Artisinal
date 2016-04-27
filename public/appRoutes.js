angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      .when('/api/registration', {
        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      .when('/profile', {
        templateUrl: 'views/'
      });
  }
]);
