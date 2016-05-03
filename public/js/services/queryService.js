angular.module('QueryService', [])

.factory('QueryFactory', function($http) {

  var queryType = function(type) {
    var results = [];
    return $http({
      method: 'GET',
      url: '/api/business',
    }).then(function(res){
      res.data.forEach(function(object) {
        if(object.specialty === type) {
          results.push(object);
        }
      });

      return results;
    });
  };

  return {
    queryType: queryType,
  };
});
