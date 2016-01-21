app.controller('modelCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	
	var id = $routeParams.id;

	$scope.setActive('mModels');
	$scope.updated = false;
	$scope.adding = false;
	$scope.message = '';
	$scope.model = {};
	$scope.brands = {};

	if (id === 'new') {

		$scope.adding = true;

	} else {

		$http.get('php/services/models.getModel.php?id=' + id).success(function(data) {

			if (data.err !== undefined) {
				window.location = '#/models';
				return;
			}

			$scope.model = data;
		});
	}

	$http.get('php/services/brands.list.php').success(function(data) {

		$scope.brands = data;

	});

	$scope.saveModel = function() {

		if ($scope.adding) {
		
			$http.post('php/services/models.create.php', $scope.model).success(function(data) {

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

			$http.post('php/services/models.update.php', $scope.model).success(function(data) {

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

	$scope.deleteModel = function() {

		$http.post('php/services/models.delete.php?id=' + $scope.model.id , $scope.model).success(function(data) {

				if (data.err === false ) {
					$scope.updated = true;
					$scope.message = 'Deleted!';
					setTimeout(function() {
						$scope.updated = false;
						$scope.$apply();
						window.location = '#/models'
					}, 3500);
				} else {
					$scope.error = true;
					$scope.message = 'You can\'t delete this model because you still have associated cars.';
				}

			});

	}


}]);