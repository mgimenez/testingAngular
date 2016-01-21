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
		.when('/model/:id',{
			templateUrl: 'partials/model.html',
			controller: 'modelCtrl'
		})
		.when('/car/:id/:brandId',{
			templateUrl: 'partials/car.html',
			controller: 'carCtrl'
		})
		.when('/car/:id/',{
			templateUrl: 'partials/car.html',
			controller: 'carCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});