(function(){
	var cindy = function($http) {

		var sendSomeData = function(url, data) {
			return $http.post(url, data)
			.then(function(response){
				return response;
			});
		};

		var getSomeData = function(url) {
			return $http.get(url)
			.then(function(response) {
				return response;
			});
		};

		return {
			ping: sendSomeData,
			pong: getSomeData,
		};
	};

	var module = angular.module("cindy");
	module.factory("cindy", cindy);

}());
