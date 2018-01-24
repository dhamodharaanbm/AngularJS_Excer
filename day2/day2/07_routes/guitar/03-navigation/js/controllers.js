 
var GuitarControllers = angular.module("GuitarControllers", []);

GuitarControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
			$http.get('js/data.json').success (function(data){
				$scope.guitarVariable = data;
				$scope.orderGuitar = 'price';
			}); 
		}]
);

GuitarControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
			$http.get('js/data.json').success (function(data){
				$scope.guitarVariable = data;
				$scope.whichGuitar = $routeParams.guitarID;

				/* Guitar details page navigation logic */
				if($routeParams.guitarID > 0)
					$scope.prevGuitar = Number($routeParams.guitarID)-1;
				else
					$scope.prevGuitar = $scope.guitarVariable.length-1;

				if($routeParams.guitarID < $scope.guitarVariable.length-1)
					$scope.nextGuitar = Number($routeParams.guitarID)+1;
				else
					$scope.nextGuitar = 0;

			}); 
		}]
);