'use strict';
app.service('LocalStorageService', function($rootScope, $window){
  function save(data){
    if (typeof data === 'object'){
      for(var key in data){
        if(data.hasOwnProperty(key)){
          var value = data[key];
          if(typeof value === 'object'){
            value = JSON.stringify(value);
          }
          $window.localStorage.setItem(key, value);
        }
      }
      $rootScope.$broadcast('LocalStorageUpdated');
      return true;
    }
    return false;
  }
  function get(key){
    var result;
    try{
      result = JSON.parse($window.localStorage(key));
    }catch(error){
      result = $window.localStorage.getItem(key);
    }
    return result;
  }
  function remove(key){
    $window.localStorage.removeItem(key);
  }
  function flush(){
$window.localStorage.clear();
$rootScope.$broadcast('LocalStorageUpdated');
  }
  function isKey(key){
return $window.localStorage.getItem(key)!==null;
  }
  return ({
    save: save,
    get: get,
    delete: remove,
    flush: flush,
    isKey:isKey
  });
});
