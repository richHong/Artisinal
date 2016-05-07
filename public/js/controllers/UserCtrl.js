angular.module('UserCtrl', [])

.controller('UserSelectController', function($scope, $rootScope, QueryFactory, RegFactory, $location) {
  $scope.data = {};
  //list out all of our specialty types of food in the below array -- this will populate in our dropdown selection for our user_BusDirectory.html view
  $scope.listOfTypes = ['Select All Types', 'Artisanal Cheese', 'Bakery', 'Cured Meats', 'Wine and Spirits', 'Salad and Sandwiches', 'Seafood', 'Desserts'];
  //invoke function to call a GET request to get business with that type of specialty

  $scope.getBusiness = function() {
    if ($scope.selectedType !== 'Select All Types') {
      QueryFactory.queryType($scope.selectedType)
        .then(function(res) {
          $scope.data.list = res;
        });
    } else {
      RegFactory.getBusinesses()
        .then(function(res) {
          $scope.data.list = res.data;
        });
    }
  };

  //OAuth with hello.js
  $scope.email = $rootScope.email;
  $scope.img = $rootScope.img;
  $scope.name = $rootScope.name;
  $scope.service ='';

  $scope.facebook = function(){
    hello('facebook').login({scope:'email'});
    $scope.service = 'facebook';
  };

  $scope.google = function(){
    hello('google').login({scope:'email'});
    $scope.service = 'google';
  };

  $scope.getInfo = function(){

    if ($scope.service === 'facebook'){
      hello('facebook').api('me').then(function(json) {
        $rootScope.email = json.email;
        $rootScope.name = json.name;
        $rootScope.img = json.picture;
      }, function(e) {
        console.log('Whoops! ' + e.error.message);
      }).then(function(){
        $location.path('busDirectory');
      });

    } else if ($scope.service === 'google'){
      hello('google').api('me').then(function(json) {
        $rootScope.email = json.email;
        $rootScope.name = json.displayName;
        $rootScope.img = json.picture;
      }, function(e) {
        console.log('Whoops! ' + e.error.message);
      }).then(function(){
        $location.path('busDirectory');
      });
    }
  };

    hello.init({
      facebook: '1139866672723483',
      google: '451153428162-85vbkkk9gl2ieldm4erfoo8l80foclkc.apps.googleusercontent.com'
    }, {redirect_uri: 'redirect.html'});
  
});
