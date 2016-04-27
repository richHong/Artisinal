angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/viewIndex.html',
        controller: 'RegController'
      })

      .when('/api/registration', {

      .when('/register', {

        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      // .when('/profile', {
      //   templateUrl: 'views/'
      // });
  }
]);
