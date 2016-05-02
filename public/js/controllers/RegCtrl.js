angular.module('RegCtrl', ['ngFileUpload'])

// .directive('fileread', function () {
//   return {
//     restrict: 'A',
//     link: function (scope, elem, attrs) {
//       elem.bind("change", function (changeEvent) {
          
//         var reader = new FileReader();
//         reader.onload = function (loadEvent) {
//           var fileread = loadEvent.target.result;
//           console.log(fileread);
//         }
        
//         reader.readAsDataURL(changeEvent.target.files[0]);
//       });
//     }
//   }
// })
.controller('RegController', function($scope, $location, RegFactory) {
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
//=================================file upload code====================================================

$scope.uploadFile = function($file){
  RegFactory.upload({
    url: 'api/files'
    data: {file : $file}
  }).then(function(res){
    console.log('Succes, your file has been uploaded' + ' This is res.data : ' res.data);
  }, function(res){
    console.log('Error status: ' + resp.status);
  }, function(evt){
    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
  });
};


  $scope.registerBusiness = function(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription) {
    $scope.upload();
    RegFactory.addBusiness(busName, busSpecialty, busAddress, busPhone, busEmail, busWebsiteLink, busPic, busMenu, busDescription)
    .then(function() {
      $location.path('/profile');
    });
  };

  $scope.registerUser = function(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic) {
    console.log('inside userCtrl:', userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic);
    RegFactory.addUser(userName, userPassword,fullName, userAddress, userPhone, userEmail, userPic);
  };

});
