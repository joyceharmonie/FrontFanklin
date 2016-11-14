'use strict';
app.controller('AlbumCtrl',function($scope, $routeParams, AlbumFullService){


    $scope.album = AlbumFullService.get($routeParams.id).success(function(data){
      $scope.album = data;
    });
  });
