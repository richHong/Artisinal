angular.module('searchResultsCtrl', [])

.controller('searchResultsCtrl', function($scope, $route ,QueryFactory) {
  // Fetches the results from the database using the global variable searchQArr
  $scope.getResults = function(){
    QueryFactory.queryType(searchQArr).then(function(){
      $scope.results = results
    })
  };
  // Getting the results upon loading the controller
  $scope.getResults();
});