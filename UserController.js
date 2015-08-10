(function(){
	var app = angular.module("cindy");

	var UserController = function($scope, cindy) {
		cindy.instantiateDB();
		/*
		 * show add/remove another repo divs
		 */
		$scope.showAddDiv = function() {
			$scope.show = "addRepoDiv";
		};
		$scope.showRemoveDiv = function() {
			$scope.show = "removeRepoDiv";
		};
		/*
		 * view user repos
		 * if indicator = 1 - add
		 * if indicator = 2 - remove
		 */
		var reposToShow = [];
		var manageUserRepos = function(userReposUrl, indicator) {
			var userRepos;
			var onGetUserReposSucc;
			if (indicator == 1) {
				onGetUserReposSucc = function(response) {
					for (i in response.data) {
						reposToShow.push(response.data[i])
					}
					userRepos = response.data;
				}
			}
			else if (indicator == 2) {
				onGetUserReposSucc = function(response) {
					var tempData = response.data;
					var index;
					var noOfObjToDelete = tempData.length;
					for (i=0;i<reposToShow.length;i++){
						if (tempData[0].id == reposToShow[i].id) {
							index = i;
						}
					}
					reposToShow.splice(index, noOfObjToDelete);
					sendReposToView();
				}
			}
			var oetUserReposErr = function(reason) {

			};
			cindy.pong(userReposUrl).then(onGetUserReposSucc, oetUserReposErr);
		};
		/*
		 * view user
		 */
		var viewUserDetails = function(userName) {
			$scope.error = null;
			var database = cindy.getDB();
			if (userName in database) {
				getUserRepos(database[userName]);
			}
			else {
				var url = "https://api.github.com/users/";
				if (userName == null) {
					userName = "MagusM";
				}
				url += userName;
				var onAddRepoCompleate = function(response) {
					$scope.show = null;
					$scope.user = response.data;
					manageUserRepos(response.data.repos_url, 1);
					cindy.insertToDB(userName, response.data.repos_url);
					sendReposToView();
				};
				var onAddRepoError = function(reason) {
					$scope.error = reason;
				};
				cindy.pong(url).then(onAddRepoCompleate, onAddRepoError);
			}
		};
		/*
		 * view default github user - me !
		 */
		viewUserDetails();
		/*
		 * add another repo
		 */
		$scope.addAnotherGitLib = function(gitName) {
			viewUserDetails(gitName);
		};
		/*
		 * remove user repo
		 */
		$scope.removeGitUserLib = function(gitName) {
			$scope.show = null;
			var database = cindy.getDB();
			if (gitName in database) {
				manageUserRepos(database[gitName], 2);
				cindy.deleteFromDB(gitName);
			}
			sendReposToView();
		};
		var sendReposToView = function() {
			$scope.repos = reposToShow;
		};
	};

	app.controller('UserController', UserController);
}())
