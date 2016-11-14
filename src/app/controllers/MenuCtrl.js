'use strict';
app.controller('MenuCtrl', function($scope, $location, LocalStorageService){
  $scope.pathView = 'app/views/partials/menu.html';
  $scope.isActive = function (path) {
    return $location.path() === path;
  };



function check(){
 $scope.isConnected = LocalStorageService.isKey('access_token');
 $scope.userMail = LocalStorageService.get('user_mail');
}
check();
  $scope.$on('LocalStorageUpdated', check);
});
