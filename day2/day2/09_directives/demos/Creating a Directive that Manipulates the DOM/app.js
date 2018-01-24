var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  
});

app.directive('helloWorld',function(){
  return{
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World</p>',
    link: function(scope,elem,attrs){
      elem.bind('click',function(){
        elem.css('background-color','cyan');
        scope.$apply(function(){
          scope.color="yellow";
        });
      });
      elem.bind('mouseover',function(){
        elem.css('cursor','pointer');
      });
    }
  }
});