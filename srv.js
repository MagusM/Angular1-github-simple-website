(function() {
  var taskSrv = function($http) {
    var send = function(url, data) {
      return $http.post(url, data)
        .then(function(response) {
          return response;
        });
    };
    var recieve = function(url) {
      return $http.get(url)
        .then(function(response) {
          return response;
        });
    };

    var getSrvClient = function() {
      return {'name':'pavel','password':'pk'};

    };
    
    return {
      sendSomeData: send,
      getSomeData: recieve,
      getRefClient: getSrvClient
    };
  };



  angular.module("app").factory("taskSrv", taskSrv);

}());