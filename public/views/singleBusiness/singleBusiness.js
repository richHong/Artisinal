var geocoder;
var map;
console.log(business);
// this function creates the map with taking the address as an argument
// for now, it uses a static address, but it should change once the controller is done
function geocode(business) {

  var address = '3222 25th st. san francisco';
  geocoder = new google.maps.Geocoder();
  
  geocoder.geocode( { 'address': address}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
      map = new google.maps.Map(document.getElementById("map"),{
        zoom: 16,
        center: results[0].geometry.location,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
       alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
