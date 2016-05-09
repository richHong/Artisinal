angular.module('FrontCtrl', [])

.controller('Carousel', ['$scope', '$animate', '$touch', function($scope, $animate, $touch){
    $scope.interval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
        {image:'css/images/miette2.jpg', name: 'Miette Bakery', description: "Modern, cheerful, and always delicious, Miette is San Francisco's most charming pastry and confectionery shop.", id: 0},
        {image:'css/images/baygrape5.jpg', name:'Bay Grape', description: "Oakland's best boutique wine shop." , id: 1},
        {image:'css/images/sightglass.jpg', name: 'Sightglass Coffee', description:"Independent, sibling-owned coffee company in San Francisco.", id: 2}
      ];
}]);
