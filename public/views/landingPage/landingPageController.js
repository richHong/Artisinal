var business; //trying to make the business id available to render it with map

angular.module('LandingPageCtrl', [])

.controller('LandingPageController', function($scope, $rootScope, $location, RegFactory) {
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
});
