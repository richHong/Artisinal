//create module for business registration controller to inject into main app module (artisanalApp)
angular.module('BusRegCtrl', [])

.controller('businessRegistrationCtrl', function($scope, BusinessFactory) {

  //create variable to hold info when called
  $scope.info;

  //create function to call factory function to send all info to post into database
  $scope.registerBusiness = function(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    BusinessFactory.addBusiness(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription);
  }
})

//so I wasn't sure if the below factory function below should have been created in the services file, but I went ahead and just put it here for now.  So we can move it to the services file as another module and inject it into the main module or the BusRegCtrl module above if need be.  We can also just leave it here as well if you guys want.

.factory('BusinessFactory', function($http) {

  //create the function to send post request to server to add new business to database
  var addBusiness = function(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    return $http({  
      method: 'POST',
      //the below URL will need to be updated to match url for server database
      URL: '/api/business'
      //fields below currently designated as # needs to be updated to match schema
      data: { '#name': busName, 
              '#addy': busAddress, 
              '#phone': busPhone, 
              '#email': busEmail, 
              '#link': busWebsiteLink, 
              '#pic': busPic, 
              '#menu': busMenu, 
              '#descript': busDescription
            }
    });
  }

  return {
    addBusiness: addBusiness
  }
})