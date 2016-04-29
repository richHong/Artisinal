//question on why RegCtrl is being injected here into this module
angular.module('RegService', [])

.factory('RegFactory', function($http) {

  console.log('inside factory!!!!');

  var addBusiness = function(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    console.log('inside the addBusiness function inside services:', busSpecialty);
    return $http({
      method: 'POST',
      url: '/api/business',
      data: { 'name': busName,
              'address': busAddress,
              'specialty': busSpecialty,
              'phoneNumber': busPhone,
              'email': busEmail,
              'description': busDescription,
              'picture': busPic,
              'menu': busMenu,
              'link': busWebsiteLink
            }
    }).then(function(res){
      return res;
    });
  };

  var addUser = function(fullName, userAddress, userPhone, userEmail, userPic) {
    console.log('inside the addUser function inside services:', fullName);
    return $http({
      method: 'POST',
      url: '/api/users',
      data: { 'name': fullName,
              'address': userAddress,
              'phoneNumber': userPhone,
              'email': userEmail,
              'picture': userPic
            }
    }).then(function(res){
      return res;
    });
  };

  var getBusinesses = function() {
    console.log('Businesses grabbed');
    return $http({
      method: 'GET',
      url: '/api/business'
    });
  };


  return {
    getBusinesses: getBusinesses,
    addBusiness: addBusiness,
    addUser: addUser
  }

});
