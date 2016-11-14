'use strict';

// register the interceptor as a service
app.factory('myHttpInterceptor', function($q, LocalStorageService) {
  return {
    // optional method
    'request': function(config) {
      // do something on success
      if(LocalStorageService.isKey('access_token')){
        config.headers.Authorization = LocalStorageService.get('token_type') + ' ' + LocalStorageService.get('access_token');
      }
      return config;
    },

    // optional method
    'requestError': function(rejection) {
      // do something on error
    /*  if (canRecover(rejection)) {
        return responseOrNewPromise;
      }*/
      return $q.reject(rejection);
    },



    // optional method
    'response': function(response) {
      // do something on success
      return response;
    },

    // optional method
  /*  'responseError': function(rejection) {
      // do something on error
      if (canRecover(rejection)) {
        return responseOrNewPromise;
      }
      return $q.reject(rejection);
    }*/
  };
});
app.config(function($httpProvider){


$httpProvider.interceptors.push('myHttpInterceptor');
});
