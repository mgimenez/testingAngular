app.controller('brandCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	var id = $routeParams.id;

	$scope.setActive("mBrands");
	$scope.updated = false;
	$scope.adding = false;
	$scope.message = '';
	$scope.brand = {};

	if (id === 'new') {

		$scope.adding = true;

	} else {

		$http.get('php/services/brands.getBrand.php?id=' + id).success(function(data) {

			if (data.err !== undefined) {
				window.location = '#/brands';
				return;
			}

			$scope.brand = data;
		});
	}


	$scope.saveBrand = function() {

		if ($scope.adding) {
		
			$http.post('php/services/brands.create.php', $scope.brand).success(function(data) {

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

			$http.post('php/services/brands.update.php', $scope.brand).success(function(data) {

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

	$scope.deleteBrand = function() {

		$http.post('php/services/brands.delete.php?id=' + $scope.brand.id , $scope.brand).success(function(data) {

				if (data.err === false ) {
					$scope.updated = true;
					$scope.message = 'Deleted!';
					setTimeout(function() {
						$scope.updated = false;
						$scope.$apply();
						window.location = '#/brands'
					}, 3500);
				} else {
					$scope.error = true;
					$scope.message = 'You can\'t delete this brand because you still have associated models.';
				}

			});

	}

}]);