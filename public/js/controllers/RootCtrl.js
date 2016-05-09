angular.module('RootCtrl', [])
.controller('RootController', function($scope, $rootScope){

  $scope.img = $rootScope.img || 'http://wiki.sep7agon.net/images/8/80/Anonymous.png';
  $scope.email = $rootScope.email || 'anonymous@anonymous.com';
  $scope.name = $rootScope.name || 'anonymous';

  $rootScope.refresh = function(){
    $scope.img = $rootScope.img || 'http://wiki.sep7agon.net/images/8/80/Anonymous.png';
    $scope.email = $rootScope.email || 'anonymous@anonymous.com';
    $scope.name = $rootScope.name || 'anonymous';
  };
})
.filter('capitalizeFirst', function(){
  return function(string){
    return string[0].toUpperCase() + string.slice(1);
  };
});