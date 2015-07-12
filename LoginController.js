(function() {
	var app = angular.module("cindy");

	var LoginController = function($scope, $location, cindy) {
		$scope.userLogin = function(user) {
			console.log(user);
			var url = "someUrl";
			var onUserLoginSuccess = function(response) {
				$location.path("/user/" + user.name);
			};
			var onUserLoginError = function(reason) {
				$location.path("/user/" + user.name);
			};
			cindy.ping(url, user).then(onUserLoginSuccess, onUserLoginError);
		};

	};
	app.controller("LoginController", LoginController);
}());
