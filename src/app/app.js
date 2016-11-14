'use strict';

var app = angular.module('app', ['templates.cache', 'ngRoute', 'ngMessages', 'slugifier', 'truncate'] );

//app.constant('API_URL', 'http://10.5.0.25');
app.constant('API_URL', 'http://192.168.132.130');
app.constant('INFO_CLIENT', {
  grant_type: 'password',
  client_id: 'webapp',
  client_secret: 'webapp'
});
app.constant('TYPE', {
  elements: [
    {text:'Sell', value: 'sell'},
    {text:'Exchange', value: 'exchange'},
    {text:'Search', value: 'search'}
  ]
});
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.title = current.$$route.title;
        }
    });
}]);
app.run(function($rootScope, API_URL){
  $rootScope.API_URL = API_URL;

});
