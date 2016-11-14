'use strict';

app.service('AlbumFullService', function($http, API_URL){
  function get(id){
    return $http({
      method: 'GET',
      url: API_URL + '/albumfull/' + id,
      cahe: false
    });
  }

  function getAll(params){
    return $http({
      method: 'GET',
      url: API_URL + '/albumfull',
      params: params,
      cahe: false
    });
  }
  return ({
    get: get,
    getAll: getAll
  });

});
