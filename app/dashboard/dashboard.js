'use strict';

angular.module('dashboard', [
	'data.weather',
	'data.cities',
	'controls.wthrConditions'
])

.controller('DashboardCtrl', ['$scope', 'weather', 'cities', function($scope, weather, cities) {
	$scope.cities = cities.getCities();
	$scope.getWeather = getWeather;

	function getWeather() {
		if (!$scope.selectedZipcode) return;

		weather.getForecast($scope.selectedZipcode).then(function(response){
			var results = response.data.query.results;
			$scope.forecast = results ? results.channel : results;
		});
	}	
}]);