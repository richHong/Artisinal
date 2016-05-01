angular.module('UserCtrl', [])

.controller('UserSelectController', function($scope, queryFactory) {
  $scope.data = {};
  //list out all of our specialty types of food in the below array -- this will populate in our dropdown selection for our user_BusDirectory.html view
  $scope.listOfTypes = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Type 8'];
  //invoke function to call a GET request to get business with that type of specialty

  $scope.getBusiness = function() {
    console.log('You selected: ', $scope.selectedType);
    queryFactory.queryType($scope.selectedType)
      .then(function(res) {
        console.log('this is res:', res);
        $scope.data.list = res
      });
    // console.log("What is $scope.data.list", $scope.data.list);
  };

  $scope.loginUser = function() {
    alert('login function called!');
  };

});
