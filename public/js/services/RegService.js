//question on why RegCtrl is being injected here into this module
angular.module('RegService', [])

.factory('RegFactory', function($http) {

  console.log('inside factory!!!!');

  var addBusiness = function(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    console.log('inside the addBusiness function inside services:', busName);
    return $http({  
      method: 'POST',
      url: '/api/business',
      data: { 'name': busName, 
              'address': busAddress, 
              'phoneNumber': busPhone, 
              'email': busEmail,
              'description': busDescription,
              'picture': busPic,  
              'menu': busMenu,
              'link': busWebsiteLink
            }
    }).then(function(res){
      return res;
    })
  };

  return {
    addBusiness: addBusiness
  }

});

