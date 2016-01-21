app.controller('carCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	
	var id = $routeParams.id;
	var brandId;

	$scope.setActive('mCars');
	$scope.updated = false;
	$scope.adding = false;
	$scope.editing = true;
	$scope.hasBrand = false;
	$scope.message = '';
	$scope.car = {};
	$scope.models = {};
	$scope.brands = {};


	$http.get('php/services/brands.list.php').success(function(data) {

		$scope.brands = data;

	});

	if (id === 'new') {

		$scope.adding = true;
		$scope.editing = false;

		$scope.$watch('car.brandId', function(value) {

			if (value !== undefined) {

				$scope.hasBrand = true;
				$http.get('php/services/models.listbyBrand.php?brandId=' + value).success(function(data) {
					$scope.models = data;
				});

			} else {
				$scope.hasBrand = false;
			}

		});

	} else {

		brandId = $routeParams.brandId;
		$scope.hasBrand = true;

		$http.get('php/services/cars.getCar.php?id=' + id).success(function(data) {

			if (data.err !== undefined) {
				window.location = '#/cars';
				return;
			}

			$scope.car = data;
		});
		
		$http.get('php/services/models.listbyBrand.php?brandId=' + brandId).success(function(data) {

			$scope.models = data;

		});
	}

	$scope.saveCar = function() {

		if ($scope.adding) {
		
			$http.post('php/services/cars.create.php', $scope.car).success(function(data) {

				if (data.err === false ) {
					$scope.updated = true;
					$scope.message = 'Created!';
					setTimeout(function() {
						$scope.updated = false;
						$scope.$apply();
					}, 3500);
				}

			});

		} else {

			$http.post('php/services/cars.update.php', $scope.car).success(function(data) {

				if (data.err === false ) {
					$scope.updated = true;
					$scope.message = 'Updated!';
					setTimeout(function() {
						$scope.updated = false;
						$scope.$apply();
					}, 3500);
				}

			});

		}
	}

	$scope.deleteCar = function() {

		$http.post('php/services/cars.delete.php?id=' + $scope.car.id , $scope.car).success(function(data) {

				if (data.err === false ) {
					$scope.updated = true;
					$scope.message = 'Deleted!';
					setTimeout(function() {
						$scope.updated = false;
						$scope.$apply();
						window.location = '#/cars'
					}, 3500);
				} else {
					$scope.error = true;
					$scope.message = 'You can\'t delete this car.';
				}

			});

	}


}]);