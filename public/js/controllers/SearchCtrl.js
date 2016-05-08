var searchQArr;

angular.module('SearchCtrl', [])

.controller('search.ctrl', function($scope, $location ,QueryFactory) {
  $scope.searchBusinesses = function() {
    searchQArr = $scope.userQuery.toLowerCase().split(' ');
    $location.path("/results");
  };
});