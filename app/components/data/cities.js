'use strict';

angular.module('data.cities', [])

.factory('cities', [function() {
	var cities = [
		{name: 'New York', code: 10007},
		{name: 'Washington', code: 20004},
		{name: 'San Francisco', code: 94157},
		{name: 'Miami', code: 33128},
		{name: 'Chicago', code: 60679}
	];

	var getCities = function() {
		return cities;
	};

	return {
		getCities: getCities
	};
}]);