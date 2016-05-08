angular.module('searchResultsCtrl', [])

.controller('searchResultsCtrl', function($scope, $route ,QueryFactory) {
  $scope.getResults = function(){
    console.log("Why am I being called twice?", searchQArr);
    QueryFactory.queryType(searchQArr).then(function(){
      console.log("AM I BEING CALLED TWICE")
    })
  };
  // $scope.getResults();
});