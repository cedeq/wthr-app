'use strict';

angular.module('weatherApp', [
	'ngRoute',
	'dashboard',
	'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
	$routeProvider.when('/dashboard', {
		templateUrl: 'dashboard/dashboard.html',
		controller: 'DashboardCtrl'
	});
	
	$routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
