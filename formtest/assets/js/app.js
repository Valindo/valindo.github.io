(function(){
	var app = angular.module('testing',[]);

	app.controller('test', ['$scope','$http', function($scope, $http){
		$scope.check = function(){
			console.log($scope.name);
			console.log($scope.emails);
			var request = $http({
				method:"post",
				url:"https://plugzee-signup.herokuapp.com/new",
				params: {
					name: $scope.name,
					email: $scope.emails,
				}
			});

			request.success(
				function( html ) {
					$scope.cfdump = html;
				}
				);
			// console.log($scope.cfdump);
		};
	}]);

	app.controller('VideoCtrl',function($scope){
		$scope.w = $(window).width();
		$scope.w = String($scope.w);
	});

})();