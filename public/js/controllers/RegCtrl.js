angular.module('RegCtrl', [])

.controller('RegController', function($scope) {
  $scope = {
    company: '',
    specialty: '',
    addresss: '',
    phone: '',
    email: '',
    description: '',
    url: ''
  };
});
