angular.module( 'OWMApp', ['ngRoute'] )
	.value( 'owmCities', ['New York', 'Dallas', 'Chicago'] )
	.config( ['$routeProvider', function ($routeProvider) {
		$routeProvider.when( '/', {
			templateUrl: 'home.html',
			controller : 'HomeCtrl'
		} ).when( '/cities/:city', {
			templateUrl: 'city.html',
			controller : 'CityCtrl'
		} );
	}] )
	.controller( 'HomeCtrl', ['$scope', function ($scope) {

	}] )
	.controller( 'CityCtrl', function ($scope, $routeParams, owmCities) {
		var city = $routeParams.city;
		city = city.replace( '_', ' ' );
		if (owmCities.indexOf( city ) == -1) {
			//city not found
			return;
		}

		$scope.city = city;
	} );