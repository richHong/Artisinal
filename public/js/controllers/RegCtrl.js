angular.module('RegCtrl', [])

.directive('fileread', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
          
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          var fileread = loadEvent.target.result;
          // console.log(fileread);
        }
        
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
})
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

  $scope.creds = {
  bucket: "",
  access_key: "",
  secret_key: ""
}
 
$scope.upload = function() {
  // Configure The S3 Object 
  console.log("!!!!!!!!!===============YOU MADE IT===================!!!!!!!!!!!!!")
  AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
  AWS.config.region = 'Oregon';
  var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
  if($scope.file) {
    var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };
 
    bucket.putObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        alert('Upload Done');
      }
    })
    .on('httpUploadProgress',function(progress) {
          // Log Progress Information
          console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
        });
  }
  else {
    // No File Selected
    alert('No File Selected');
  }
}

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
