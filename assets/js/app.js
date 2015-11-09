(function(){
	var app = angular.module('landingPage',['ngDialog']);

	app.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

	app.controller('MainCtrl',function($scope, ngDialog){
		$scope.clickToOpen = function (){
			ngDialog.open({ template: 'test.html'});
		};
	});

	app.controller('VideoCtrl',function($scope){
		$scope.w = $(window).width();
		$scope.w = String($scope.w);
	});

	app.controller('MenuCtrl',function($scope){
		$scope.show = true;
		$scope.showMe = function(){
			$scope.show = !$scope.show;
			console.log($scope.show);
		};
	});

	app.controller('FromSubmit', ['$scope','$http', function($scope, $http, transformRequestAsFormPost){
// 	$scope.check = function(){
	// 		console.log($scope.name);
	// 		console.log($scope.emails);
	// 		var request = $http({
	// 			method:"post",
	// 			url:"http://127.0.0.1:4567/new",
	// 			transformRequest: transformRequestAsFormPost,
	// 			data: {
	// 				name: $scope.name,
	// 				email: $scope.emails,
	// 			}
	// 		});
	// 		console.log(typeof request);
	// 		// console.log(request.toSource());
	// 		// console.log($scope.cfdump);
	// 	};
	$scope.post = function(names,emails) {
		$http.post("http://plugzee-signup.herokuapp.com/new", { name: names, email: emails }).success(function(result) {
			console.log(result);
			$scope.resultPost = result;
			console.log("*********")
			$scope.result = true;
		}).error(function() {
			console.log("error");
		});
	};

	$scope.again = function(){
		$scope.result = false;
	};

}]);

})();