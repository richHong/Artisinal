// Global variable to collect search results
var searchQArr;

angular.module('SearchCtrl', ['ProfileCtrl'])

.controller('search.ctrl', function($scope, $location, $route, $rootScope, QueryFactory) {
  // Takes results and changes all words to lower case and splits all into an array
  $scope.searchBusinesses = function() {
    searchQArr = $scope.userQuery.toLowerCase().split(' ');
    // Redirects page to results page
    if($location.path() !== '/results'){
      $location.path("/results");
    } else {
      $route.reload();
    }
    

  };
});