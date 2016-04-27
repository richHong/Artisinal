angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {

    //below there was a "These" written -- I commented it out
    // These

    $routeProvider
      .when('/', {
        templateUrl: 'views/viewIndex.html',
        controller: 'MainController'
      })
      .when('/register', {
        templateUrl: 'views/',
        controller: 'RegController'
      })
      .when('/profile', {
        templateUrl: 'views/'
      });

  }
]);
