'use strict';

app.directive('dirLoader', function(){
  return {
    restrict: 'A',
    scope: false,
    link: function(scope, element, attr){
      scope.$watch(attr.dirLoader,function(value){
        if(angular.isDefined(value.finally) && typeof value.finally === 'function'){
          value.finally(function(){
            element.removeClass('spinner');
            //console.log('spinner');
          });
          element.addClass('spinner');
          //console.log('not spinner');

        }
      });
    }
  };
});
