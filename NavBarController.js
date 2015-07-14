(function() {
  var app = angular.module('cindy');

  var NavBarController = function($location, $scope, cindy) {
    $scope.logout = function() {
    	cindy.resetDB();
    	$location.path("/main");
    };
  };
  app.controller('NavBarController', NavBarController)
}());
