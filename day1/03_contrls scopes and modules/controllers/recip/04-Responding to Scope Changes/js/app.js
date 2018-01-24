function MyCtrl($scope) {
  $scope.name = "";

  $scope.$watch("name", function(newalue, oldalue) {
    if (newalue.length > 0) {
      $scope.greeting = "Greetings " + newalue;
    }
  });
}