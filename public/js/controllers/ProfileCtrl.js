angular.module('ProfileCtrl', [])

.controller('ProfileController', function($scope, $rootScope, RegFactory) {
  $scope.data = {};
  $scope.id = $rootScope.id;

  $scope.displayBusinesses = function() {
    RegFactory.getSingleBusiness($scope.id)
      .then(function(data) {
        $scope.data = data.data;
      });
  };
  $scope.displayBusinesses();
});
