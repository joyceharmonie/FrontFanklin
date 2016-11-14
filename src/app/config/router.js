'use strict';

app.config(function($routeProvider, $locationProvider ){

  $routeProvider
   .when('/', {
     title: 'Home',
     templateUrl: 'app/views/partials/home.html',
     controller: 'HomeCtrl'
   })
   .when('/albums', {
     title: 'Albums',
     templateUrl: 'app/views/partials/albums.html',
     controller: 'AlbumsCtrl'
   })
   .when('/album/:id', {
     title: 'Album',
     templateUrl: 'app/views/partials/album.html',
     controller: 'AlbumCtrl'
   })
   .when('/about', {
     title: 'About',
     templateUrl: 'app/views/partials/about.html',
     controller: 'AboutCtrl'
   })
   .when('/register', {
     title: 'Register',
     templateUrl: 'app/views/partials/UserRegister.html',
     controller: 'UserRegisterCtrl'
   })
   .when('/admin', {
     title: 'Admin',
     templateUrl: 'app/views/partials/admin.html',
     controller: 'AdminCtrl',
  })
   .when('/signin', {
     title: 'Signin',
     templateUrl: 'app/views/partials/UserSignin.html',
     controller: 'UserSigninCtrl'
   })


   .when('/logout', {
     resolve: {
       execute: function(LocalStorageService){
         //console.log('ok');
         LocalStorageService.flush();
       }
     },

     redirectTo: '/signin'
   });
   $locationProvider.html5Mode({
   enabled: true,
   requireBase: true,
   rewriteLinks: true

 });

});
