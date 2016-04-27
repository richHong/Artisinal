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

  $scope.registerBusiness = function(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    console.log('inside RegCtrl -- being invoked!!!!!!!');
    console.log(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription);
    RegFactory.addBusiness(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription);
  }

});
