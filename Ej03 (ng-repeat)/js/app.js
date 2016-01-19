(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		
	$scope.listado = ['Fernando Herrera', 'Matias Gimenez', 'Pepe Biondi', 'Maria Perez'];

	$scope.listadoProfesores = {
		profesores: [{
			nombre: "Pepe Biondi",
			edad: 21,
			clase: "PEE"
		},{
			nombre: "Juan Biondi",
			edad: 53,
			clase: "SAA"
		},{
			nombre: "Mama Biondi",
			edad: 35,
			clase: "TAA"
		}]
	}

}]);





})();
