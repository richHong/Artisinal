angular.module('QueryService', [])

.factory('QueryFactory', function($http) {

  var queryType = function(type) {
    var results = [];
    return $http({
      method: 'GET',
      url: '/api/business',
    }).then(function(res){
      res.data.forEach(function(object) {
        var specialtySplit = object.specialty.toLowerCase().split(' ');
        for(var i = 0; i < specialtySplit.length; i++){
          if(specialtySplit[i] === type) {
            console.log(object)
          results.push(object);
          }
        }
      });
      return results;
    });
  };

  return {
    queryType: queryType,
  };
});
