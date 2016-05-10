angular.module('RootCtrl', [])
.controller('RootController', function($scope, $rootScope){

  $scope.img = $rootScope.img || 'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png';
  $scope.email = $rootScope.email || 'anonymous@anonymous.com';
  $scope.name = $rootScope.name || 'guest';

  $rootScope.refresh = function(){
    $scope.img = $rootScope.img || 'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png';
    $scope.email = $rootScope.email || 'anonymous@anonymous.com';
    $scope.name = $rootScope.name || 'guest';
  };
})
.filter('capitalizeFirst', function(){
  return function(string){
    return string[0].toUpperCase() + string.slice(1);
  };
});