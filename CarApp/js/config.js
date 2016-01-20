app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl'
		})
		.when('/cars',{
			templateUrl: 'partials/cars.html',
			controller: 'carsCtrl'
		})
		.when('/models',{
			templateUrl: 'partials/models.html',
			controller: 'modelsCtrl'
		})
		.when('/brands',{
			templateUrl: 'partials/brands.html',
			controller: 'brandsCtrl'
		})
		.when('/brand/:id',{
			templateUrl: 'partials/brand.html',
			controller: 'brandCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});