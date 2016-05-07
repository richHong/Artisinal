angular.module('searchResultsCtrl', [])

.controller('searchResultsCtrl', function($scope, $route ,QueryFactory) {
  QueryFactory.queryType(searchQArr).then(function(){
    // console.log("hey there handsome", results)
  })
});