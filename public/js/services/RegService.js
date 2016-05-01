//question on why RegCtrl is being injected here into this module
angular.module('RegService', [])

.factory('RegFactory', function($http) {

  console.log('inside factory!!!!');

  var addBusiness = function(busName, busAddress, busSpecialty, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    console.log('inside the addBusiness function inside services:', busPic);
    return $http({
      method: 'POST',
      url: '/api/business',
      data: { 'company': busName,
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

  var addUser = function(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic) {
    console.log('inside the addUser function inside services:', fullName);
    return $http({
      method: 'POST',
      url: '/api/users',
      data: { 'name': fullName,
              'username': userName,
              'password': userPassword,
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
