'use strict';

app.service('GenreService', function($http, API_URL){
  function get(id){
    return $http({
      method: 'GET',
      url: API_URL + '/genre/' + id,
      cache: false,
    });
  }
  function getAll(){
    return $http({
      method: 'GET',
      url: API_URL + '/genre',
      cache: false,
    });
  }
  return ({
    get:get,
    getAll: getAll
  });
});
