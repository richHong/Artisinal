angular.module('UserCtrl', [])

.controller('UserSelectController', function($scope, QueryFactory, RegFactory) {
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
        })
    }
  };

  $scope.loginUser = function() {
    alert('login function called!');
  };

});
