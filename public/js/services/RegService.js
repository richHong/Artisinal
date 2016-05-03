angular.module('RegService', [])

.factory('RegFactory', function($http) {
  var addBusiness = function(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
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
    });
  };

  var addUser = function(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic) {
    console.log('inside the addUser function inside services:', fullName);
    return $http({
      method: 'POST',
      url: '/api/users',
      data: { 'username': userName,
              'password': userPassword,
              'name': fullName,
              'address': userAddress,
              'phoneNumber': userPhone,
              'email': userEmail,
              'picture': userPic
            }
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
    addUser: addUser,
  };

});
