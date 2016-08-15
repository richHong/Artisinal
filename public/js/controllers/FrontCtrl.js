var geocode;

angular.module('FrontCtrl', [])

.controller('Carousel', ['$scope', '$animate', '$touch', 'RegFactory', '$rootScope', '$location',function($scope, $animate, $touch, RegFactory, $rootScope, $location){
    $scope.interval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
        {image:'css/images/miette2.jpg', name: 'Miette Bakery', description: "Modern, cheerful, and always delicious, Miette is San Francisco's most charming pastry and confectionery shop.", id: 0, _id: '57310dbd5c208dba06a0cdf8', address: "449 Octavia St, San Francisco, CA"},
        {image:'css/images/baygrape5.jpg', name:'Bay Grape', description: "Oakland's best boutique wine shop." , id:1,
        _id: '57310fa5f68acf250726521a', address: '376 Grand Ave, Oakland, CA 94610'},
        {image:'css/images/sightglass.jpg', name: 'Sightglass Coffee', description:"Independent, sibling-owned coffee company in San Francisco.", id: 2, _id: '57311017f68acf250726521b', address: '270 7th St, San Francisco, CA 94103'}
      ];

  $scope.data = {};


  $scope.displayBusinesses = function() {
    RegFactory.getBusinesses()
      .then(function(data) {
        $scope.data = data.data;
        business = data.data;
      });
  };

  $scope.getSingleBusiness = function(id, address) {
    $rootScope.id = id;
    $location.path("/busSingle");
    $scope.map(address);
  };

  $scope.map = function geocode(address) {

    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status){
      var image = '/css/images/map_pins.png';
      if (status == google.maps.GeocoderStatus.OK) {
        map = new google.maps.Map(document.getElementById("map"),{
          zoom: 16,
          center: results[0].geometry.location,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          icon: image,
          animation: google.maps.Animation.DROP
        });
      } else {
         alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  $scope.displayBusinesses();

  $scope.searchBusinesses = function(string) {
    searchQArr = [string];
    if($location.path() !== '/results'){
      $location.path("#/results");
    } else {
      $route.reload();
    }
  };

}]);

