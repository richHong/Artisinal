angular.module('ProfileCtrl', [])

.controller('ProfileController', function($scope, RegFactory) {
  $scope.data = {};
  $scope.displayBusinesses = function() {
    RegFactory.getBusinesses()
      .then(function(data) {
        $scope.data = data.data;
      });
  };

  $scope.displayBusinesses();
});
