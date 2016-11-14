'use strict';

app.service('AuthorService', function($http, API_URL){
  function get(id){
    return $http({
      method: 'GET',
      url: API_URL + '/author/' + id,
      cache: false,
    });
  }
  function getAll(){
    return $http({
      method: 'GET',
      url: API_URL + '/author',
      cache: false,
    });
  }
  return ({
    get:get,
    getAll: getAll
  });
});
