angular.module('ArtisanApp.FrontCtrl', [])

.controller('FrontController',['$scope', '$animate', function($scope, $animate) {
  console.log('inside frontController. YEEEEEEEEEEEEEEEE!')
  $scope = {};
  console.log($scope)
  $scope.slides = [
      {image:'../images/bread.jpg', description: 'Bakery'},
      {image:'../images/wineandcheese.jpg', description: 'Sommelier'},
      {image:'../sushiii.jpg', description: 'Seafood'}
    ];
    console.log($scope.slides)
}]);
