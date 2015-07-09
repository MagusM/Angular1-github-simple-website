(function() {
  var app = angular.module("app");

  var LoginController = function($scope, $location, srvTask) {
    $scope.userLogin = function(user) {
      var url = "someUrl";
      var onUserLoginSuccess = function(response) {
        $location.path("/user/" + user.name);
      };
      var onUserLoginError = function(reason) {
        $location.path("/user/" + user.name);
      };
      srvTask.sendSomeData(url, user).then(onUserLoginSuccess, onUserLoginError);
      $location.path("/user/" + user.name);
    };
    
  };
  app.controller("LoginController", LoginController);
}());