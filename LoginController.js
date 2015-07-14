(function() {
	var app = angular.module("cindy");

	var LoginController = function($scope, $location, cindy) {
		$scope.userLogin = function(user) {
			$scope.error = null;
			if (user.name == "master" && user.password == "yoda") {
				$location.path("/user/" + user.name);
			}
			else {
				$scope.error = true;
			}
		};

	};
	app.controller("LoginController", LoginController);
}());
