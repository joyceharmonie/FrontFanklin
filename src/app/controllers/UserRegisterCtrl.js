'use strict';

app.controller('UserRegisterCtrl',function($scope, $location, UserService){
  console.log('UserRegisterCtrl');

  $scope.submit = function(){
    $scope.submitted = true;

    $scope.checkPassword = function(){
      if ($scope.inputPassword === $scope.inputPasswordConfirm){
        $scope.form.passwordconf.$setValidity('confirm', true);
      }else {
        $scope.form.passwordconf.$setValidity('confirm', false);
      }
    };
    var params = {
      mail : $scope.inputEmail,
      password : $scope.inputPassword,
      confirm_password: $scope.inputConfirmPassword,
      first_name: $scope.inputFirstName,
      last_name: $scope.inputLastName
    };
    //console.log($scope.submitted, params, $scope.form.$valid);
    if ($scope.form.$valid){
      UserService.insert(params).success(function(){
        $location.path('/signin');
      });
    }
  };
});
