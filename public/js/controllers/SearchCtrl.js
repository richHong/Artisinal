// Global variable to collect search results
var searchQArr;

angular.module('SearchCtrl', [])

.controller('search.ctrl', function($scope, $location, $route ,QueryFactory) {
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