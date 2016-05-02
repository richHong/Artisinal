angular.module('UserCtrl', [])

.controller('UserSelectController', function($scope, QueryFactory, RegFactory) {
  $scope.data = {};
  //list out all of our specialty types of food in the below array -- this will populate in our dropdown selection for our user_BusDirectory.html view
  $scope.listOfTypes = ['Select All Types', 'Artisanal Cheese', 'Bakery', 'Cured Meats', 'Wine and Spirits', 'Salad and Sandwiches', 'Seafood', 'Desserts'];
  //invoke function to call a GET request to get business with that type of specialty

  $scope.getBusiness = function() {
    console.log('You selected: ', $scope.selectedType);
    if ($scope.selectedType !== 'Select All Types') {
      QueryFactory.queryType($scope.selectedType)
        .then(function(res) {
          console.log('this is res:', res);
          $scope.data.list = res
        });
    } else {
      console.log('Select all was selected');
      RegFactory.getBusinesses()
      .then(function(res) {
        console.log('this is res:', res);
        $scope.data.list = res.data;
      })
    }
    // console.log("What is $scope.data.list", $scope.data.list);
  };

  $scope.loginUser = function() {
    alert('login function called!');
  };

});
