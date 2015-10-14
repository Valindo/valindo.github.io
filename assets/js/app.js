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

})();