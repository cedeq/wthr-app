'use strict';

angular.module('controls.wthrConditions', [])

.directive('wthrConditions', [function() {
	return {
		restrict: 'A',
		scope: {
			channel: '=wthrConditions'
		},
		replace: true,
		templateUrl: '/components/controls/wthr-conditions.html',
		link: function($scope) {
			$scope.$watch('channel', function(channel) {
				if (!channel) return;
				$scope.weather = channel;
			});
		}
	};
}]);