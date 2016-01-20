app.controller('carsCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.setActive("mCars");
	$scope.cars = {};
	$scope.brands = {};

	$http.get('php/services/cars.list.php').success(function(data) {

		$scope.cars = data;

	});

	$http.get('php/services/brands.list.php').success(function(data) {

		$scope.brands = data;

	});


}]);