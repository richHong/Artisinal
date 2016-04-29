angular.module('RegCtrl', [])

.controller('RegController', function($scope, RegFactory) {
  //changed below to $scope.data -- $scope.registerBusiness function couldn't be invoked before change
  $scope.data = {
    company: '',
    specialty: '',
    addresss: '',
    phone: '',
    email: '',
    description: '',
    url: ''
  };

  $scope.registerBusiness = function(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    console.log('inside RegCtrl:', busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription);
    RegFactory.addBusiness(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription);
  }

  $scope.registerUser = function(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic) {
    console.log('inside userCtrl:', userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic);
    RegFactory.addUser(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic);
  }

});
