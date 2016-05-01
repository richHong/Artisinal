angular.module('QueryService', [])

.factory('QueryFactory', function($http){

  var queryType = function(type){
    var results = [];
    console.log('What is the type that has been passed in: ',type);
    return $http({
      method: 'GET',
      url: '/api/business',
    }).then(function(res){
      console.log('what is res?', res);
      res.data.forEach(function(object){
        if(object.specialty === type){
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
