function MyCtrl($scope) {
  $scope.value = 51;

  $scope.incrementValue = function(value) {
    $scope.value += 1;
  };
}