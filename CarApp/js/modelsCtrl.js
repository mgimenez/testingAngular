app.controller('modelsCtrl', ['$scope', '$http', function($scope, $http) {
	
	$scope.setActive('mModels');
	$scope.models = {};

	$http.get('php/services/models.list.php').success(function(data) {

		$scope.models = data;

	});


}]);