var app = angular.module('carApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.menuTop = 'partials/menuTop.html';

	$scope.setActive = function(section){

		$scope.mHome = '';
		$scope.mCars = '';
		$scope.mModels = '';
		$scope.mBrands = '';

		$scope[section] = 'active';

	}

}])