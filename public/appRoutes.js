angular.module('appRoutes', [])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frontPage.html',
        controller: 'Carousel'
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
      .when('/results', {
        templateUrl: 'views/searchResultsView.html',
        controller: 'searchResultsCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/busProfile.html',
        controller: 'ProfileController'
      })
      .when('/busSingle', {
        templateUrl: '/views/singleBusiness/singleBusiness.html',
        controller: 'ProfileController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }
]);
