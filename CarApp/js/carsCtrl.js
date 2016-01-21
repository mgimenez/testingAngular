app.controller('carsCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.setActive("mCars");
	$scope.cars = {};
	$scope.brands = {};

	$http.get('php/services/cars.list.php').success(function(data) {

		$scope.cars = data;
		$scope.years = $scope.getYears(data);

	});

	$http.get('php/services/brands.list.php').success(function(data) {

		$scope.brands = data;

	});

	$scope.getYears = function(data) {
		var years = [];

		for(var i=0; i<data.length; i++) {
		   years.push(data[i].year)
		}

		years = years.filter( function( item, index, inputArray ) {
			return inputArray.indexOf(item) == index;
	    });

	    return years;

	}

}]);