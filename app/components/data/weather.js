'use strict';

angular.module('data.weather', [])

.factory('weather', ['$http', function($http) {
	var basePath = 'forecast';
	
	var getForecast = function(zipcode) {
		return $http({
  			method: 'GET',
  			url: basePath + '/zipcode/' + zipcode
		});
	};

	return {
		getForecast: getForecast
	};
}]);