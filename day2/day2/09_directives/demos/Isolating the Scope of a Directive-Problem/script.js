  angular.module('docsScopeProblemExample', [])
    .controller('NaomiController',function($scope) {
      $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
    })
    .controller('IgorController',function($scope) {
      $scope.customer = {
        name: 'Igor',
        address: '123 Somewhere'
      };
    })
    .directive('myCustomer', function() {
      return {
        restrict: 'E',
        templateUrl: 'my-customer.html'
      };
    });