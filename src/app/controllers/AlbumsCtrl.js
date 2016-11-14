'use strict';

app.controller('AlbumsCtrl',function($scope, AlbumFullService, AuthorService, GenreService, TYPE){
  $scope.typesList = TYPE;
  $scope.autorList = AuthorService.getAll().success(function(data){
    $scope.authorList = data;
  });
  $scope.genreList = GenreService.getAll().success(function(data){
    $scope.genreList = data;
  });
  $scope.reset = function(){
    $scope.selectAuthor = $scope.selectGenre = $scope.selectType = null;
    $scope.check();
  };
  $scope.check = function(){
    var params = {
      author: angular.isDefined($scope.selectAuthor) && $scope.selectAuthor!==null ? $scope.selectAuthor.id : 0,
      genre: angular.isDefined($scope.selectGenre) && $scope.selectGenre!==null ? $scope.selectGenre.id : 0,
      type: angular.isDefined($scope.selectType) && $scope.selectType!==null ? $scope.selectType.value : 0
    };
    $scope.albums = AlbumFullService.getAll(params).success(function(data){
      $scope.albums = data;
    });
  };
  $scope.check();
});
