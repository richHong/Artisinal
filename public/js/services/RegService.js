//question on why RegCtrl is being injected here into this module
angular.module('RegService', ['RegCtrl'])

.factory('RegFactory', function($http) {

  var addBusiness = function(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    return $http({  
      method: 'POST',
      URL: '/api/business'
      data: { 'name': busName, 
              'address': busAddress, 
              'phoneNumber': busPhone, 
              'email': busEmail,
              'description': busDescription,
              'picture': busPic,  
              'menu': busMenu,
              'link': busWebsiteLink
            }
    });
  }

  return {
    addBusiness: addBusiness
  }

});


//create the function to send post request to server to add new business to database
