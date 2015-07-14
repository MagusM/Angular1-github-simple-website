(function(){
	var cindy = function($http) {
		var db;

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

		var instantiateDb = function() {
			this.db = {};
		};
		var getDb = function() {
			return this.db;
		};
		var saveToData = function(name, repoLink) {
			if (this.db[name] == null) {
				this.db[name] = repoLink;
			}
		};
		var removeFromData = function(name) {
			delete this.db[name]
		};
		var resetData = function() {
			this.db = null;
			this.db = {};
		};

		return {
			ping: sendSomeData,
			pong: getSomeData,
			getDB: getDb,
			insertToDB: saveToData,
			deleteFromDB: removeFromData,
			resetDB: resetData,
			instantiateDB: instantiateDb
		};
	};

	var module = angular.module("cindy");
	module.factory("cindy", cindy);

}());
