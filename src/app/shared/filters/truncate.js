'use strict';

app.filter('truncate', function(){
  return function(input, length, over){
    if(angular.isString(input)){
        var more = over===undefined ? '' : over;
        return input.length>length ? input.substring(0, length) + ' ' + more : input;
    }
    return input;
  };
});
