app.controller('brandsCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.setActive('mBrands');
	$scope.brands = {};


	$http.get('php/services/brands.list.php').success(function(data) {

		$scope.brands = data;

	});

}]);