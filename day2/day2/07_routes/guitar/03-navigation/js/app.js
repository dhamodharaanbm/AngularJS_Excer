 
var GuitarApp = angular.module('GuitarApp', ['ngRoute','GuitarControllers']);

GuitarApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:guitarID', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/test/:guitarID', {
    templateUrl: 'partials/test.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);