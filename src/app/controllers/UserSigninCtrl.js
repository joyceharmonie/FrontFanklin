'use strict';

app.controller('UserSigninCtrl',function($scope,$location, UserService, LocalStorageService){
  console.log('UserSigninCtrl');
if (LocalStorageService.isKey('access_token')) {
  $location.path('/signin');
}

  $scope.submit = function(){
    $scope.submitted = true;
    var params = {
      username: $scope.inputEmail,
      password: $scope.inputPassword

    };
    if($scope.form.$valid){
      UserService.connect(params).success(function(data){
        LocalStorageService.save(data);
        UserService.get('current').success(function(data){
          LocalStorageService.save({
            user_mail:data.mail
          });
          $location.path('/admin');
          console.log(data);
        });
      });
    }
  };
});
