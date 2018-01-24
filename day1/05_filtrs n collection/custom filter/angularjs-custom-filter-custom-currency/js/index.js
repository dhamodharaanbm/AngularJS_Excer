var app = angular.module('filters', []);

app.controller('demo', function($scope){
  $scope.example1 = 29.99;
})

app.filter('customCurrency', function(){
  return function(input, symbol, place){
    if(isNaN(input)){
      return input;
    } else {
      var symbol = symbol || '$';
      var place = place === undefined ? true : place;
      if(place === true){
        return symbol + input;
      } else{
        return input + symbol;
      }
    }
  }
})