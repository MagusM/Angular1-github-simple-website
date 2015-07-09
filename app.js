(function(){
	var app = angular.module("app", ["ngRoute"]);
	var routeProvider = function($routeProvider){
		$routeProvider
		.when("/main", {
			templateUrl: "main.html",
			controller: "MainController"
		})
		.when("/login", {
			templateUrl: "login.html",
			controller: "LoginController"
		})
		.when("/user/:user", {
			templateUrl: "user.html",
			controller: "UserController"
		})
		.otherwise({redirectTo:"/main"});
	};
	app.config(routeProvider);
}());