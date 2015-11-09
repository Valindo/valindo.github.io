(function(){
	var app = angular.module('landingPage',['ngDialog']);

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

})();