angular.module('searchResultsCtrl', [])

.controller('searchResultsCtrl', function($scope, $route ,QueryFactory) {
  $scope.getResults = function(){
    console.log("Why am I being called twice?")
    QueryFactory.queryType(searchQArr).then(function(){
    })
  };
  $scope.getResults();
});