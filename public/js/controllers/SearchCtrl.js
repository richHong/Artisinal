angular.module('SearchCtrl', [])

.controller('search.ctrl', function($scope, QueryFactory) {
  $scope.searchBusinesses = function() {
    QueryFactory.queryType($scope.userQuery);
  };


});