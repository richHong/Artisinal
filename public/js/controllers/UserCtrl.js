angular.module('UserCtrl', [])

.controller('UserSelectController', function($scope) {
  //list out all of our specialty types of food in the below array -- this will populate in our dropdown selection for our user_BusDirectory.html view
  $scope.listOfTypes = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Type 8'];
  //invoke function to call a GET request to get business with that type of specialty
  $scope.getBusiness = function(){
    $scope.businessType = $scope.selectedType;
    console.log('You selected: ', $scope.selectedType);
  };

  $scope.loginUser = function() {
    alert('login function called!');
  };

})