angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frontPage.html'
      })
      .when('/register', {
        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      // .when('/profile', {
      //   templateUrl: 'views/'
      // });
  }
]);
