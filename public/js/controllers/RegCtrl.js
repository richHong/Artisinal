angular.module('RegCtrl', [])

.controller('RegController', function($scope, RegFactory) {
  $scope = {
    company: '',
    specialty: '',
    addresss: '',
    phone: '',
    email: '',
    description: '',
    url: ''
  };

  $scope.registerBusiness = function(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    RegFactory.addBusiness(busName, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription);
  }

});
