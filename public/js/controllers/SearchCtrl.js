angular.module('SearchCtrl', [])

.controller('search.ctrl', function($scope, QueryFactory) {
  $scope.searchBusinesses = function() {
    var searchQArr = $scope.userQuery.toLowerCase().split(' ');
    QueryFactory.queryType(searchQArr);
  };
});