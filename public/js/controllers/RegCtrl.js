angular.module('RegCtrl', ['ngFileUpload'])

.directive('fileread', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          var fileread = loadEvent.target.result;
          scope.data.picture = fileread;
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
})

.directive('menuread', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          var menuread = loadEvent.target.result;
          scope.data.menu = menuread;
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
})

.controller('RegController', function($scope, $location, RegFactory) {
  $scope.data = {
    company: '',
    specialty: '',
    addresss: '',
    phone: '',
    picture: '',
    menu: '',
    email: '',
    description: '',
    url: ''
  };

  $scope.registerBusiness = function(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    busPic = $scope.data.picture;
    busMenu = $scope.data.menu;
    RegFactory.addBusiness(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription)
      .then(function() {
        $location.path('/profile');
      });
  };

  $scope.registerUser = function(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic) {
    RegFactory.addUser(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic);
  };

});
