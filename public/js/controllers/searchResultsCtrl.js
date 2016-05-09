angular.module('searchResultsCtrl', [])

.controller('searchResultsCtrl', function($scope, $route, $rootScope, $location, QueryFactory, RegFactory) {
  // Fetches the results from the database using the global variable searchQArr
  $scope.getResults = function(){
    QueryFactory.queryType(searchQArr).then(function(){
      $scope.results = results
    })
  };
  // Getting the results upon loading the controller
  $scope.getResults();

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
  }
});