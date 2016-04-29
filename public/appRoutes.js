angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frontPage.html'
      })
      .when('/user_login', {
        templateUrl: 'views/user_login.html',
        controller: 'UserSelectController'
      })
      .when('/busDirectory', {
        templateUrl: 'views/user_BusDirectory.html',
        controller: 'UserSelectController'
      })
      .when('/registerUser', {
        templateUrl: 'views/userRegistration.html',
        controller: 'RegController'
      })
      .when('/register', {
        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      .when('/busGreet', {
        templateUrl: 'views/busGreeting.html'
      })
      .when('/profile', {
        templateUrl: 'views/busProfile.html',
        controller: 'ProfileController'
      });
  }
]);
