(function() {
  var app = angular.module('cindy');

  var NavBarController = function($location, $scope, cindy) {
    $scope.logout = function() {
      var url = "someUrl";
      var onUserLogoutSuccess = function(response) {
        $location.path("/main");
      };
      var onUserLogoutError = function(reason) {
        $location.path("/main");
      };
      cindy.pong(url).then(onUserLogoutSuccess, onUserLogoutError);
    };
  };
  app.controller('NavBarController', NavBarController)
}());
