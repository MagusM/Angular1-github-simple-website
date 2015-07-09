(function() {
  var NavBarController = function($scope, $location, srvTask) {
    // $scope.logout = function() {
    //   var url = "someUrl";
    //   var onUserLogoutSuccess = function(response) {
    //     $location.path("/main");
    //   };
    //   var onUserLogoutError = function(reason) {
    //     $location.path("/main");
    //   };
    //   srvTask.getSomeData(url).then(onUserLogoutSuccess, onUserLogoutError);
    //   $location.path("/main");
    // };
    $scope.logout = function(){
      alert("s");
      $location.path("/main");
    };


  };

  angular.module("app").controller("NavBarController", NavBarController);

}());