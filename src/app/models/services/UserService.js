'use strict';

app.service('UserService', function($http, API_URL, INFO_CLIENT){
  function get(id){
    return $http({
      method: 'GET',
      url: API_URL + '/users/' + id,
      cache: false,
    });
  }
  function getAll(){
    return $http({
      method: 'GET',
      url: API_URL + '/users',
      cache: false,
    });
  }
  function insert(params){
    return $http({
      method: 'POST',
      url: API_URL + '/users',
      data: params,
      cache: false
    });
  }
  function connect(parrams){
    var currentParams = INFO_CLIENT;
    currentParams.username = parrams.username;
    currentParams.password = parrams.password;
    return $http({
      method: 'POST',
      url: API_URL + '/oauth',
      data: currentParams,
      cache: false
        });
  }
  return ({
    get:get,
    getAll: getAll,
    insert: insert,
    connect: connect
  });
});
